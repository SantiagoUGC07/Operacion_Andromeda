let arregloInventario= [];

fetch('../json/inventario.json').then(response => {
    return response.json();
}).then(data => {
    arregloInventario = data;
    inventario();
}).catch(err => {
    console.log("Error");
});

function inventario(){
    
}