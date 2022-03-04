let arregloUsuarios= [];

fetch('../json/usuario.json').then(response => {
    return response.json();
}).then(data => {
    arregloUsuarios = data;
    usuario();
}).catch(err => {
    console.log("Error");
});

function usuario(){
    
}