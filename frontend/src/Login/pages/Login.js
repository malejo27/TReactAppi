import React from 'react';
import logo from "../../logo.svg";
import "./Login.css";

const Login = ({}) => {
    return(
        <div className="img center">
            <h1 className="text-center mt-5 mb-5">
            Bienvenido al Gestor de Proyectos TReact
            </h1>
            <img src={logo} alt="logo" />

        </div>
    );    
};

export default Login;
