let arregloUsuarios= [];
//json usuarios
let nombre = document.querySelector("#pedidoNombre");
let apellido = document.querySelector("#pedidoApellido");
let correo = document.querySelector("#pedidoCorreo");
let contrasena = document.querySelector("#pedidoContrasena");
let telCliente = document.querySelector("#pedidoCelCliente");



fetch('../json/usuario.json').then(response => {
    return response.json();
}).then(data => {
    arregloUsuarios = data;
    usuario();
}).catch(err => {
    console.log("Error");
});

function usuario(){
    nombre.textContent = arregloUsuarios[8].nombre_cliente;
    apellido.textContent = arregloUsuarios[8].apellido_cliente;
    correo.textContent = arregloUsuarios[8].correo;
    contrasena.textContent = arregloUsuarios[8].contrasenia;
}

