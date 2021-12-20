const callApi = async (url, options = {}) => {
    const token =localStorage.getItem("token");
    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
    };
    
    const response = await fetch(
        "http://localhost:3001/api" + url, options);
        // process.env.REACT_BACKEND_URL +url, options);
    const data = await response.json();
    return data;
};



const api = {


    products: {
        list() {
            return callApi("/productos");
        },
        create(producto) {
            console.log(JSON.stringify(producto));
            return callApi("/productos", {
                method: "POST", 
                body: JSON.stringify(producto),
            });
        },
       
        delete(id){
            return callApi(`/productos/${id}`, {
                method: "DELETE",
            });
        },
        edit(producto) {
            return callApi(`/productos/${producto._id}`, {
              method: "PUT",
              body: JSON.stringify(producto),
            });
        },
        getProduct(id) {
            return callApi(`/productos/${id}`);
        },
        findProduct(name){
            return callApi(`/productos/${name}`);
        }
    },
    usuarios: {
        list() {
            return callApi("/usuarios");
        },
        create(usuario) {
            console.log(JSON.stringify(usuario));
            return callApi("/usuarios", {
                method: "POST", 
                body: JSON.stringify(usuario),
            });
        },
        delete(id){
            return callApi(`/usuarios/${id}`, {
                method: "DELETE",
            });
        },
        edit(usuario) {
            return callApi(`/usuarios/${usuario._id}`, {
              method: "PUT",
              body: JSON.stringify(usuario),
            });
        },
        getUsuario(id) {
            return callApi(`/usuarios/${id}`);
        },
    },
    ventas: {
        list() {
            return callApi("/ventas");
        },
        create(venta) {
            console.log(JSON.stringify(venta));
            return callApi("/ventas", {
                method: "POST", 
                body: JSON.stringify(venta),
            });
        },
    
        getVentas(id) {
            return callApi(`/ventas/${id}`);
        },
        edit(venta) {
            return callApi(`/ventas/${venta._id}`, {
              method: "PUT",
              body: JSON.stringify(venta),
            });
        },
        delete(id){
            return callApi(`/ventas/${id}`, {
                method: "DELETE",
            });
        },
        findVenta(name){
            return callApi(`/ventas/${name}`);
        },

    },
    user: {
        getUser() {
            return callApi("/user");
        },
        validarAdmin() {
            return callApi("/user/validarAdmin");
          },
    },
   
};

export default api;