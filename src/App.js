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
import ListadoProductos from "./ListadoProductos/pages/ListadoProductos";
import ListadoUsuarios from "./ListadoUsuarios/pages/ListadoUsuarios";
import ListadoVentas from "./ListadoVentas/pages/ListadoVentas";
import Login from "./Login/pages/Login";
import RegistroProductos from "./RegistroProductos/pages/RegistroProductos";
import RegistroVentas from "./RegistroVentas/pages/NuevaVenta";
import EditarProducto from "./ListadoProductos/pages/EditarProducto";
import EditarUsuario from "./ListadoUsuarios/pages/EditarUsuario";
import EditarVenta from "./ListadoVentas/pages/EditarVenta";
import PrivateRoute from "./Shared/components/PrivateRoute";
import PrivateRouteAdmin from "./Shared/components/PrivateRouteAdmin";
import api from "./api";
import {useEffect, useState} from "react";
import{useJwt} from "react-jwt";

function App () {
  const[usuarios, setUsuarios] = useState([]);
  const[logged, setLogged] = useState([false]);
  const[productos, setProductos] = useState([]);
  const[ventas, setVentas] = useState([]);
  const[isAdmin, setIsAdmin] = useState([true]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.products.list();
      setProductos(response);
    };
    const fetchVentas = async () => {
      const response = await api.ventas.list();
      setVentas(response);
    };
    const fetchUsuarios = async () => {
      const response = await api.usuarios.list();
      setUsuarios(response);
    };

    fetchData();
    fetchVentas();
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
        <Route path="/ListadoProductos" exact>
          <ListadoProductos productos = {productos} setProductos={setProductos}/>
        </Route>
        <PrivateRoute path="/ListadoUsuarios" exact>
          <ListadoUsuarios usuarios = {usuarios} setUsuarios={setUsuarios}/>
        </PrivateRoute>
        <Route path="/ListadoVentas" exact>
          <ListadoVentas ventas = {ventas} setVentas={setVentas}/>
        </Route>
        <PrivateRouteAdmin path="/ListadoProductos/Edit/:productId" isAdmin={isAdmin} exact>
          <EditarProducto productos={productos} setProductos={setProductos} />
        </PrivateRouteAdmin>
        <PrivateRouteAdmin path="/ListadoUsuarios/Edit/:usuarioId" isAdmin={isAdmin} exact>
          <EditarUsuario usuarios={usuarios} setUsuarios={setUsuarios} />
        </PrivateRouteAdmin>
        <PrivateRouteAdmin path="/ListadoVentas/Edit/:ventaId" isAdmin={isAdmin} exact>
          <EditarVenta ventas = {ventas} setVentas={setVentas}/>
        </PrivateRouteAdmin>
        <PrivateRoute path="/RegistroProductos" exact>
          <RegistroProductos productos = {productos} setProductos={setProductos}/>
        </PrivateRoute>
        <PrivateRoute path="/RegistroVentas" exact>
          <RegistroVentas ventas = {ventas} setVentas={setVentas} />
        </PrivateRoute>
        
        <Redirect to="/"/>
      </Switch>
      <Footer/>
   </Router>
  );
};

export default App;
