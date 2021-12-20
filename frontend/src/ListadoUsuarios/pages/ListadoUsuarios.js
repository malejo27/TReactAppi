import Form from 'react-bootstrap/Form';
//import "../../styles/styles.css"

import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from '../../api';

const ListadoUsuarios = ({usuarios, setUsuarios}) => { 
  const deleteUsuarios = (event) => {
    const id = event.target.id;

    api.usuarios.delete(id);
    console.log(usuarios);
    const newUsuario = usuarios.filter((usuario) => usuario._id !== id);
    setUsuarios([...newUsuario]);
};

return( 

    <div>
      <h3 className="text-center mt-5 mb-5">Listado de Usuarios</h3>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>Nombre</th>
              <th>Email</th>
              <th>Estado</th>
              <th>Rol</th>
              {/*<th>Clave</th>
              <th>Usuario</th>*/}
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => {
              return (
                <tr className="text-center" key={usuario._id}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.email}</td>
                  {/* <td>{usuario.estado}</td> */}
                  <td>{usuario.rol}</td> 
                  {/*<td>{usuario.clave}</td>
                  <td>{usuario.rol}</td> 
                  <td>{usuario.estado}</td>
                  <td>{usuario.usuario}</td>*/}
                  <td>
                    <input
                      type="checkbox"
                      className="custom-control-input text-center"
                      id="customCheck1"
                      checked={usuario.activo}
                      readOnly
                    />{" "}
                  </td>
                  <td>
                  <Link to={`/ListadoUsuarios/Edit/${usuario._id}`}>
                    <Button
                      variant="warning"
                      //onClick={popProduct}
                      //id={producto._id}
                      //className="ms-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                    </Button>
                    </Link>

                    <Button
                      variant="danger"
                      onClick={deleteUsuarios}
                      id={usuario._id}
                      className="ms-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </Button>
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
)
};

export default ListadoUsuarios;
