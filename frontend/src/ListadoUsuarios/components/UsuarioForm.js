import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UsuarioForm = ({ handleChange, handleClick, formValue }) => {
  return (
    <Form>

     {/*<Form.Group className="mb-3">
        <Form.Label>Usuario</Form.Label>
        <Form.Control
          type="text"
          name="usuario"
          onChange={handleChange}
          value={formValue.usuario}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>contraseña</Form.Label>
        <Form.Control
          type="text"
          name="clave"
          onChange={handleChange}
          value={formValue.clave}
        />
      </Form.Group> */}

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
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          onChange={handleChange}
          value={formValue.email}
        />
      </Form.Group>

      {/* <Form.Group className="mb-3">
        <Form.Label>Estado</Form.Label>
        <Form.Control
          type="text"
          name="estado"
          onChange={handleChange}
          value={formValue.estado}
        />
      </Form.Group> */}

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