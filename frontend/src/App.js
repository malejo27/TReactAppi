import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, 
  Route, 
  Switch,
  Redirect,
} from "react-router-dom";
import React from "react";
import Footer from "./Shared/components/Footer";
import Header from "./Shared/components/Header";
import GestionUsuarios from "./GestionUsuarios/pages/GestionUsuarios";
import ListadoProyectos from "./ListadoProyectos/pages/ListadoProyectos";
import ListadoUsuarios from "./ListadoUsuarios/pages/ListadoUsuarios";
import Login from "./Login/pages/Login";
import RegistroProyectos from "./RegistroProyectos/pages/RegistroProyectos";
import EditarProyecto from "./ListadoProyectos/pages/EditarProyecto";
import EditarUsuario from "./ListadoUsuarios/pages/EditarUsuario";
import PrivateRoute from "./Shared/components/PrivateRoute";
import PrivateRouteAdmin from "./Shared/components/PrivateRouteAdmin";
import api from "./api";
import {useEffect, useState} from "react";
import{useJwt} from "react-jwt";

function App () {
  const[usuarios, setUsuarios] = useState([]);
  const[logged, setLogged] = useState([false]);
  const[proyectos, setProyectos] = useState([]);
  const[isAdmin, setIsAdmin] = useState([true]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.proyects.list();
      setProyectos(response);
    };
  
  
    const fetchUsuarios = async () => {
      const response = await api.usuarios.list();
      setUsuarios(response);
    };

    fetchData();
    fetchUsuarios();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      const validRol = await api.user.validarAdmin();
      setIsAdmin(validRol);
    };

    if (token === null) {
      setLogged(false);
    } else {
      fetchData();
      setLogged(true);
    }
  }, []);



  return (
    <Router>
      <Header
      isLoggedIn={logged}
      login={setLogged}
      setIsAdmin={setIsAdmin}
      />
      <Switch>
        <Route path="/" exact>
          <Login
          isLoggedIn={logged}
          />
        </Route>
        <PrivateRouteAdmin path="/GestionUsuarios" isAdmin={isAdmin} exact>
          <GestionUsuarios usuarios={usuarios} setUsuarios={setUsuarios} />
        </PrivateRouteAdmin>
        <Route path="/ListadoProyectos" exact>
          <ListadoProyectos proyectos = {proyectos} setProyectos={setProyectos}/>
        </Route>
        <PrivateRoute path="/ListadoUsuarios" exact>
          <ListadoUsuarios usuarios = {usuarios} setUsuarios={setUsuarios}/>
        </PrivateRoute>
        <PrivateRouteAdmin path="/ListadoProyectos/Edit/:proyectId" isAdmin={isAdmin} exact>
          <EditarProyecto proyectos={proyectos} setProyectos={setProyectos} />
        </PrivateRouteAdmin>
        <PrivateRouteAdmin path="/ListadoUsuarios/Edit/:usuarioId" isAdmin={isAdmin} exact>
          <EditarUsuario usuarios={usuarios} setUsuarios={setUsuarios} />
        </PrivateRouteAdmin>
        <PrivateRoute path="/RegistroProyectos" exact>
          <RegistroProyectos proyectos = {proyectos} setProyectos={setProyectos}/>
        </PrivateRoute>
        
        <Redirect to="/"/>
      </Switch>
      <Footer/>
   </Router>
  );
};

export default App;
