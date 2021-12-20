import React, {useState, useEffect} from "react";
// import {Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';
import { Row, Col, Alert } from "react-bootstrap";
import api from "../../api";

const GestionUsuarios = ({usuarios, setUsuarios}) => {
   
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const [newUsuario, setNewUsuario] = useState({
        
        nombre: "",
        apellido: "",
        identificacion: "",
        correo: "",
        rol: "",
        estado: false,
        
        
    });
    const handleChange = (event) => {
        setNewUsuario({ ...newUsuario, [event.target.name]: event.target.value });
      };
    
      const handleClick = async () => {
        //llamada de la api con el método post
        const apiResponse = await api.usuarios.create(newUsuario);
          if(apiResponse.err){
            setError(apiResponse.err.message);
            console.log(apiResponse.err);
          }
          else{
            setSuccess(apiResponse);
            setUsuarios([...usuarios, newUsuario]);
            //history.push("/ListadoProductos");
          }
      };
      return (
      <React.Fragment>
                 <div className="ContenedorLogin justify-content-md-center" center>   
            <main className="form-signin--md" center>  
                <form className="row g-3 border" center>
                    <div>
                        <h3 className="text-center mt-5"> 
                            <center>
                            Gestión de Usuarios
                            </center>
                        </h3>

                    </div>
                    <div>
                            <Form>
                                {/* <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formnomusuario">
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control type="text" name ="usuario" 
                                         onChange={handleChange} placeholder="Usuario" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formClave">
                                        <Form.Label>Clave</Form.Label>
                                        <Form.Control type="text" name ="clave" 
                                         onChange={handleChange} placeholder="Clave" />
                                    </Form.Group>
                                </Row> */}

                                <Form.Group className="mb-3" controlId="formNombres">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type= "text" name = "nombre" 
                                     onChange={handleChange} placeholder="Ingrese Nombres " />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formNombres">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control type= "text" name = "apellido" 
                                     onChange={handleChange} placeholder="Ingrese Apellidos" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formNombres">
                                    <Form.Label>Identificacion</Form.Label>
                                    <Form.Control type= "number" name = "identificacion" 
                                     onChange={handleChange} placeholder="Ingrese numero de identificación" />
                                </Form.Group>
                                
            
                                <Form.Group className="mb-3" controlId="formNombres">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control type= "text" name = "correo"
                                     onChange={handleChange} placeholder="Ingrese correo electronico" />
                                </Form.Group>


                                <Row className="mb-3">                                    

                                    <Form.Group  as={Col} controlId="formrol">
                                        <Form.Label>Rol</Form.Label>
                                        <Form.Select type= "text" name = "rol"  onChange={handleChange} 
                                        >
                                            <option selected disabled>Seleccione una opcion</option> 
                                            <option>Lider</option>
                                            <option>Admin</option>
                                            <option>Estudiante</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Check
                                        type="checkbox"
                                        id="default-checkbox"
                                        label="Activo"
                                        name="activo"
                                        value="true"
                                        onChange={handleChange}
                                        />
                                    </Form.Group>
                                    
                                </Row>
                                <center>
                                <Button onClick={handleClick} type="button"variant="primary">Guardar</Button>{' '}
                                <Button type="primary" variant="outline-secondary">
                                Cancelar
                                </Button>
                                {/*<Button variant="primary">Nuevo</Button>{' '}
                                <Button onClick={handleClick} type="button"variant="primary">Guardar</Button>{' '}
                                <Button variant="primary">Modificar</Button>{' '}
                                <Button variant="primary">Eliminar</Button>{' '}*/}
                                </center>
                                <h1></h1>
            <Row className="justify-content-center">
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            </Row>

                            </Form>

                    </div>
                </form>
            </main>
        </div>
        </React.Fragment>
     )
    };
export default GestionUsuarios;

        