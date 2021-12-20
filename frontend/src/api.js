const callApi = async (url, options = {}) => {
    const token =localStorage.getItem("token");
    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
    };
    
    const response = await fetch(
        "http://localhost:3000/api" + url, options);
        // process.env.REACT_BACKEND_URL +url, options);
    const data = await response.json();
    return data;
};

const api = {
    proyects: {
        list() {
            return callApi("/proyectos");
        },
        create(proyecto) {
            console.log(JSON.stringify(proyecto));
            return callApi("/proyectos", {
                method: "POST", 
                body: JSON.stringify(proyecto),
            });
        },
       
        delete(id){
            return callApi(`/proyectos/${id}`, {
                method: "DELETE",
            });
        },
        edit(proyecto) {
            return callApi(`/proyectos/${proyecto._id}`, {
              method: "PUT",
              body: JSON.stringify(proyecto),
            });
        },
        getProyect(id) {
            return callApi(`/proyectos/${id}`);
        },
        findProyect(name){
            return callApi(`/proyectos/${name}`);
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