import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import React, {useState} from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

import api from "../../api";
//import {useHistory} from "react-router-dom";

const RegistroProyectos = ({proyectos, setProyectos, formValue}) => {
  //const history=useHistory();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const [newProyect, setNewProyect] = useState({
    title: "",
    objetivos: "",
    presupuesto: 0,
    fechaInicio: "",
    fechaFin: "",
  });
  const handleChange = (event) => {
    setNewProyect({ ...newProyect, [event.target.name]: event.target.value });
  };
  const handleClick = async () => {
    //llamada de la api con el método post
    const apiResponse = await api.proyects.create(newProyect);
      if(apiResponse.err){
        setError(apiResponse.err.message);
        console.log(apiResponse.err);
      }
      else{
        setSuccess(apiResponse);
        setProyectos([...proyectos, newProyect]);
        //history.push("/ListadoVentas");
  //history.push("/ListadoProductos");
      }
  };

    return (
    
    <React.Fragment>
      <h3 className="text-center mt-5">Registro de proyectos</h3>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={6}>
            
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nombre Poyecto</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Objetivo</Form.Label>
                <Form.Control
                  type="text"
                  name="objetivo"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Presupuesto</Form.Label>
                <Form.Control
                  type="number"
                  name="presupuesto"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Fecha de Inicio</Form.Label>
                <Form.Control
                  type="date" name="fechaInicio" onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Fecha de Fin</Form.Label>
                <Form.Control
                  type="date" name="fechaFin" onChange={handleChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label="Disponible"
                  name="disponible"
                  value="true"
                  onChange={handleChange}
                />
              </Form.Group>

              <Button type="primary" variant="outline-secondary">
                Cancelar
              </Button>
              <Button
                onClick={handleClick}
                type="button"
                variant="primary"
                className="float-end"
              >
                Guardar
              </Button>
            </Form>
            <h1></h1>
            <Row className="justify-content-center">
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>

    )
   
};

export default RegistroProyectos;