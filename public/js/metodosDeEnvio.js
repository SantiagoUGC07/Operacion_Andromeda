let arregloMetodosDeEnvio= [];

fetch('../json/metodosDeEnvio.json').then(response => {
    return response.json();
}).then(data => {
    arregloMetodosDeEnvio = data;
    metodosDeEnvio();
}).catch(err => {
    console.log("Error");
});

function metodosDeEnvio(){
    
}