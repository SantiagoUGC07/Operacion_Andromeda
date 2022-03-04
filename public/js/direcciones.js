let arregloObjetosDirecciones = [];

// json de direcciones
let nombreCompleto = document.querySelector("#pedidoNombreCompleto");
let containerNombre = document.querySelector("#pedidoContainerNombreCompleto");
let direccion1 = document.querySelector("#pedidoDireccion1");
let direccion2 = document.querySelector("#pedidoDireccion2");
let direccion3 = document.querySelector("#pedidoDireccion3");


fetch('../json/direcciones.json').then(response => {
    return response.json();
}).then(data => {
    arregloObjetosDirecciones = data;
    formato();
    direcciones();
}).catch(err => {
    console.log("Error");
});

function direcciones(){
    nombreCompleto.textContent = arregloObjetosDirecciones[11].nombre_cliente + " " + arregloUsuarios[8].apellido_cliente;
    /* containerNombre.innerHTML = `<p class="subtitle__bold">${arregloUsuarios[8].nombre_cliente}</p>`; */
    direccion1.textContent = arregloObjetosDirecciones[11].direccion;
}

function formato(id){
    let direccion = arregloObjetosDirecciones[id].direccion;
    let numInt = arregloObjetosDirecciones[id].numero_interior;
    let numExt = arregloObjetosDirecciones[id].numero_exterior;
    let edo = arregloObjetosDirecciones[id].estado;
    let cd = arregloObjetosDirecciones[id].ciudad;
    let CP = arregloObjetosDirecciones[id].codigo_postal;
    let ref = arregloObjetosDirecciones[id].informacion_adicional;

}