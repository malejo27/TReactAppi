import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const VentasForm = ({ handleChange, handleClick, formValue }) => {
  return (
    <Form>
     <Form.Group className="mb-3">
        <Form.Label>Vendedor</Form.Label>
        <Form.Control
          type="text"
          name="nombreVendedor"
          onChange={handleChange}
          value={formValue.nombreVendedor}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Cliente</Form.Label>
        <Form.Control
          type="text"
          name="nombreCliente"
          onChange={handleChange}
          value={formValue.nombreCliente}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Fecha de Venta</Form.Label>
        <Form.Control
          type="Date"
          name="fechaVenta"
          onChange={handleChange}
          value={formValue.fechaVenta}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Valor total ($)</Form.Label>
        <Form.Control
          type="number"
          name="valorTotal"
          onChange={handleChange}
          value={formValue.valorTotal}
        />
      </Form.Group>

      <Button type="button" variant="outline-secondary">
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
  );
};

export default VentasForm;