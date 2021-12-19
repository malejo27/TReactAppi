import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import ProductForm from "../components/ProductForm";

const EditarProducto = ({ productos, setProductos }) => {
  const history = useHistory();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const { productId } = useParams();

  const [newProduct, setNewProduct] = useState({
    title: "",
    disponible: false,
    valorUnitario: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.products.getProduct(productId);
      setNewProduct(response);
    };

    fetchData();
  }, [productId]);

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const apiResponse = await api.products.edit(newProduct);
    if (apiResponse.err) {
      setError(apiResponse.err.message);
      console.log(apiResponse.err);
    } else {
      setSuccess(apiResponse);
      setProductos([...productos, newProduct]);
      history.push("/ListadoProductos");
    }
  };

  return (
    <React.Fragment>
      <h3 className="text-center mt-5 mb-5">Editar productos</h3>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={6}>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <ProductForm
              handleChange={handleChange}
              handleClick={handleClick}
              formValue={newProduct}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default EditarProducto;