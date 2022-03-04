let arregloObjetosformasDePago = [];

fetch('../json/formasDePago.json').then(response => {
    return response.json();
}).then(data => {
    arregloObjetosformasDePago = data;
    formasDePago();
}).catch(err => {
    console.log("Error");
});

function formasDePago() {

}