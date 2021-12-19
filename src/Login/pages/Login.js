import React from 'react';
import logo from "../../car.svg";
import "./Login.css";

const Login = ({}) => {
    return(
        <div className="img center">
            <h1 className="text-center mt-5 mb-5">
            Bienvenido al Concesionario Assembly
            </h1>
            <img src={logo} className="container-img" alt="logo" />

        </div>
    );    
};

export default Login;
