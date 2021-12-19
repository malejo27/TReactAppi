import React, {useState, useEffect} from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Alert } from "react-bootstrap";

import api from "../../api";
//import {useHistory} from "react-router-dom";

const RegistroProductos = ({productos, setProductos}) => {
  //const history=useHistory();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const [newProduct, setNewProduct] = useState({
      title: "",
      marca: "",
      modelo: 0,
      cilindraje: 0,
      categoria: "",
      disponible: false,
      valorUnitario: 0,
  });
  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };
  const handleClick = async () => {
    //llamada de la api con el método post
    const apiResponse = await api.products.create(newProduct);
      if(apiResponse.err){
        setError(apiResponse.err.message);
        console.log(apiResponse.err);
      }
      else{
        setSuccess(apiResponse);
        setProductos([...productos, newProduct]);
        //history.push("/ListadoVentas");
  //history.push("/ListadoProductos");
      }
  };

    return (

<React.Fragment>
      <h3 className="text-center mt-5">Registro de productos</h3>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={6}>
            
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Marca</Form.Label>
                <Form.Control
                  type="text"
                  name="marca"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Modelo</Form.Label>
                <Form.Control
                  type="number"
                  name="modelo"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cilindraje</Form.Label>
                <Form.Control
                  type="number"
                  name="cilindraje"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Categoria</Form.Label>
                <Form.Control
                  type="text"
                  name="categoria"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Valor Unitario ($)</Form.Label>
                <Form.Control
                  type="number"
                  name="valorUnitario"
                  onChange={handleChange}
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

export default RegistroProductos;