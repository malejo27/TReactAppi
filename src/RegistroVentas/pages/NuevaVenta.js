import React, {useState, useEffect} from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container,Table, Row, Col, Alert, FloatingLabel } from "react-bootstrap";

import api from "../../api";
//import {useHistory} from "react-router-dom";

const NuevaVenta = ({ventas, setVentas}) => {
  //const history=useHistory();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const [newVenta, setNewVenta] = useState({
    nombreVendedor: "",
    nombreCliente: "",
    idCliente: "",
    producto: "",
    fechaPago: 0 ,
    idProducto: 0,
    marca: "",
    modelo: "" ,
    cantidad: 0,
    precioUnitario: 0,
    valorTotal:  0,
  });

const handleChange = (event) => {
    setNewVenta({ ...newVenta, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    //llamada de la api con el método post
    const apiResponse = await api.ventas.create(newVenta);
      if(apiResponse.err){
        setError(apiResponse.err.message);
        console.log(apiResponse.err);
      }
      else{
        setSuccess(apiResponse);
        setVentas([...ventas, newVenta]);
        //history.push("/ListadoVentas");
      }
  };
    return (
  <React.Fragment>
      <h3 className="text-center mt-5">Registro de ventas</h3>
       
      <Container>
      <Row className="d-flex justify-content-center align-items-center">
          <Col xs={6}>
            
            <Form>
            <h1></h1>
              <Form.Group className="mb-3">
              
                <Form.Label>Nombre Vendedor</Form.Label>
                <Form.Control
                  type="text" name="nombreVendedor" onChange={handleChange}
                  
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Nombre Cliente</Form.Label>
                <Form.Control
                  type="text" name="nombreCliente" onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Id Cliente</Form.Label>
                <Form.Control
                  type="text" name="idCliente" onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Fecha de venta</Form.Label>
                <Form.Control
                  type="date" name="fechaPago" onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Id Producto</Form.Label>
                <Form.Control
                  type="text" name="idProductos" onChange={handleChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Producto</Form.Label>
                <Form.Control
                  type="text" name="productos" onChange={handleChange}
                />
              </Form.Group>
          
              <Form.Group className="mb-3">
                <Form.Label>Marca</Form.Label>
                <Form.Control
                  type="text" name="marca" onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Modelo</Form.Label>
                <Form.Control
                  type="text" name="modelo" onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                  type="number" name="cantidad" onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Valor Unitario ($)</Form.Label>
                <Form.Control
                  type="number" name="precioUnitario" onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Valor Total ($)</Form.Label>
                <Form.Control
                  type="number" name="valorTotal" onChange={handleChange}
                />
              </Form.Group>

              {/* <Form.Select  xs={3} aria-label="Floating label select example">
                <option name="estado">Seleccione Estado de venta</option>
                <option >En proceso</option>
                <option >Entregada</option>
                <option >Cancelada</option>
              </Form.Select> */}
              
              {/* <h1></h1> */}
              
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

export default NuevaVenta;
  

    