import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import UsuarioForm from "../components/UsuarioForm";

const EditarUsuario = ({ usuarios, setUsuarios }) => {
  const history = useHistory();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const { usuarioId } = useParams();

  const [newUsuario, setNewUsuario] = useState({
    nombre: "", 
    email: "",
    activo: false,     
    rol: "",
    
    
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.usuarios.getUsuario(usuarioId);
      setNewUsuario(response);
    };

    fetchData();
  }, [usuarioId]);

  const handleChange = (event) => {
    setNewUsuario({ ...newUsuario, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const apiResponse = await api.usuarios.edit(newUsuario);
    if (apiResponse.err) {
      setError(apiResponse.err.message);
      console.log(apiResponse.err);
    } else {
      setSuccess(apiResponse);
      setUsuarios([...usuarios, newUsuario]);
      history.push("/ListadoUsuarios");
    }
  };

  return (
    <React.Fragment>
      <h3 className="text-center mt-5 mb-5">Editar usuarios</h3>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col >
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <UsuarioForm
              handleChange={handleChange}
              handleClick={handleClick}
              formValue={newUsuario}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default EditarUsuario;