import Form from "react-bootstrap/Form";
import api from "../../api";

const BusquedaProyectos = ({proyectos, setProyectos}) => {
    
    const findProyect = (event) => {
        const regex = new RegExp(".*" + event.target.value.toLowerCase() +".*");

        const proyectosFilter = proyectos.filter((proyecto) => 
        proyecto.title.toLowerCase().match(regex));

        console.log(proyectosFilter);
        setProyectos(proyectosFilter);
    };
    
    return <Form.Control 
        onChange={findProyect}
        type="text" 
        placeholder="Ingrese nombre..." />;
};

export default BusquedaProyectos;