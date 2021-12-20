import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UsuarioForm = ({ handleChange, handleClick, formValue }) => {
  return (
    <Form>

      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          onChange={handleChange}
          value={formValue.nombre}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          name="apellido"
          onChange={handleChange}
          value={formValue.apellido}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Identificacion</Form.Label>
        <Form.Control
          type="number"
          name="identificacion"
          onChange={handleChange}
          value={formValue.identificacion}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Correo</Form.Label>
        <Form.Control
          type="text"
          name="correo"
          onChange={handleChange}
          value={formValue.correo}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Rol</Form.Label>
        <Form.Control
          type="text"
          name="rol"
          onChange={handleChange}
          value={formValue.rol}
        />
           </Form.Group>
     
     

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Check
          type="checkbox"
          id="default-checkbox"
          label="Activo"
          name="activo"
          //  value={formValue.activo}
           value={formValue.activo|| "true"}
          onChange={handleChange}
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

export default UsuarioForm;