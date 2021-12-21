import Form from "react-bootstrap/Form";
import api from "../../api";

const BusquedaProductos = ({productos, setProductos}) => {
    
    const findProduct = (event) => {
        const regex = new RegExp(".*" + event.target.value.toLowerCase() +".*");

        const productosFilter = productos.filter((producto) => 
        producto.title.toLowerCase().match(regex));

        console.log(productosFilter);
        setProductos(productosFilter);
    };
    
    return <Form.Control 
        onChange={findProduct}
        type="text" 
        placeholder="Ingrese nombre..." />;
};

export default BusquedaProductos;