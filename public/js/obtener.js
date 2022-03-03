let arregloObjetos = [];

fetch('accesorios.json').then(response => {
    return response.json();
}).then(data => {
    arregloObjetos = data;
    catalogo();
}).catch(err => {
    console.log("Error");
});

function catalogo() {
    for (let index = 0; index < arregloObjetos.length; index++) {
        const cartaAzul = document.createElement("div");
        cartaAzul.classList = 'col-lg-4 col-md-6 col-sm-12'
        cartaAzul.innerHTML = `
        <div class="m-3 carta-productos p-3">
        <a href="../html/pc-gamer-delios.html">
            <div class="nombre-producto-texto">${arregloObjetos[index].nombre_producto}</div>
        </a>
        <a href="../html/pc-gamer-delios.html">
            <img src="${arregloObjetos[index].ruta_imagen_1}" class="imagen-producto">
        </a>
        <a href="../html/pc-gamer-delios.html">
            <div class="precio-texto text-right">$ <span class="precio-numero">${arregloObjetos[index].precio_producto}</span> MXN</div>
        </a>
        <form action="../html/pc-gamer-delios.html">
            <button class="btn-color-auto mt-3" type="submit">
                Ver articulo
            </button>
        </form>
    </div>
        `
        document.getElementById("catalogoImagenes").appendChild(cartaAzul);
    }
}