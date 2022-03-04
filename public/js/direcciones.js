let arregloObjetosDirecciones = [];

fetch('../json/direcciones.json').then(response => {
    return response.json();
}).then(data => {
    arregloObjetosDirecciones = data;
    direcciones();
}).catch(err => {
    console.log("Error");
});

function direcciones() {

}