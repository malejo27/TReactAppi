import Form from "react-bootstrap/Form";
import api from "../../api";

const BusquedaVentas = ({ventas, setVentas}) => {
    
    const findVenta = (event) => {
        const regex = new RegExp(".*" + event.target.value.toLowerCase() +".*");

        const ventasFilter = ventas.filter((venta) => 
        venta.nombreCliente.toLowerCase().match(regex));
        console.log(ventasFilter);
        setVentas(ventasFilter);
    };
    
    return <Form.Control 
        onChange={findVenta}
        type="text" 
        placeholder="Ingrese nombre cliente..." />;
};

export default BusquedaVentas;