import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import ProyectForm from "../components/ProyectForm";

const EditarProyecto = ({ proyectos, setProyectos }) => {
  const history = useHistory();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const { proyectId } = useParams();

  const [newProyect, setNewProyect] = useState({
    title: "",
    objetivos: "",
    presupuesto: "",
    fechaInicio: "",
    fechaFin: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.proyects.getProyect(proyectId);
      setNewProyect(response);
    };

    fetchData();
  }, [proyectId]);

  const handleChange = (event) => {
    setNewProyect({ ...newProyect, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const apiResponse = await api.proyects.edit(newProyect);
    if (apiResponse.err) {
      setError(apiResponse.err.message);
      console.log(apiResponse.err);
    } else {
      setSuccess(apiResponse);
      setProyectos([...proyectos, newProyect]);
      history.push("/ListadoProyectos");
    }
  };

  return (
    <React.Fragment>
      <h3 className="text-center mt-5 mb-5">Editar proyectos</h3>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={6}>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <ProyectForm
              handleChange={handleChange}
              handleClick={handleClick}
              formValue={newProyect}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default EditarProyecto;