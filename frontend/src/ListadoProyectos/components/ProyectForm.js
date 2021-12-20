import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ProyectForm = ({ handleChange, handleClick, formValue }) => {
  return (
    <Form>
     <Form.Group className="mb-3">
        <Form.Label>Nombre Proyecto</Form.Label>
        <Form.Control
          type="text"
          name="title"
          onChange={handleChange}
          value={formValue.title}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Objetivo</Form.Label>
        <Form.Control
          type="text"
          name="objetivo"
          onChange={handleChange}
          value={formValue.objetivo}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Presupuesto</Form.Label>
        <Form.Control
          type="number"
          name="presupuesto"
          onChange={handleChange}
          value={formValue.presupuesto}
        />
      </Form.Group>       

      <Form.Group className="mb-3">
        <Form.Label>Fecha de Inicio</Form.Label>
        <Form.Control
          type="Date"
          name="fechaInicio"
          onChange={handleChange}
          value={formValue.fechaInicio}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Fecha de Fin</Form.Label>
        <Form.Control
          type="Date"
          name="fechaFin"
          onChange={handleChange}
          value={formValue.fechaFin}
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

export default ProyectForm;