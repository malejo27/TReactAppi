import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import VentasForm from "../components/VentasForm";

const EditarVenta = ({ ventas, setVentas }) => {
  const history = useHistory();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const { ventaId } = useParams();

  const [newVenta, setNewVenta] = useState({
    id: "",
    nonmbreVendedor: "",
    nonmbreCliente: "",
    fechaPago: "",
    valorTotal: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.ventas.getVentas(ventaId);
      setNewVenta(response);
    };

    fetchData();
  }, [ventaId]);

  const handleChange = (event) => {
    setNewVenta({ ...newVenta, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const apiResponse = await api.ventas.edit(newVenta);
    if (apiResponse.err) {
      setError(apiResponse.err.message);
      console.log(apiResponse.err);
    } else {
      setSuccess(apiResponse);
      setVentas([...ventas, newVenta]);
      history.push("/ListadoVentas");
    }
  };

  return (
    <React.Fragment>
      <h3 className="text-center mt-5 mb-5">Editar ventas</h3>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={6}>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <VentasForm
              handleChange={handleChange}
              handleClick={handleClick}
              formValue={newVenta}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default EditarVenta;