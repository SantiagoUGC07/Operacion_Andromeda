
let arregloObjetos = [];

fetch('public/json/accesorios.json').then(response => {
    return response.json();
}).then(data => {
    arregloObjetos = data;
    catalogo();
}).catch(err => {
    console.log("Error");
});


let arregloPCGamer = [];

fetch('public/json/productos.json').then(response => {
    return response.json();
}).then(data => {
    arregloPCGamer = data;
    console.log(`${arregloPCGamer[4].nombre_producto}`);
    console.log(`${arregloPCGamer[4].ruta_imagen_1}`);
    pcgamer();
}).catch(err => {
    console.log("asasdas");
});


function pcgamer() {
    document.getElementById("catalogoVideojuegos").innerHTML = `
            <a class="hover-animation" href="public/html/pc-gamer-delios.html">
                <div class="miniatura-equipo">
                    <div class="descripcion">
                        <div class="descripcion-contenedor">
                            <img class="vista-previa-producto-imagen"
                                src="${arregloPCGamer[4].ruta_imagen_1}"><!--  -->
                            <div class="vista-previa-producto-texto">${arregloPCGamer[4].nombre_producto}</div><!--  -->
                        </div>
                    </div>
                    <img class="descripcion-fondo"
                        src="public/assets/img/resources/index/carousel-pc-recomendada/background.png">
                </div>
                <img class="miniatura-videojuego" src="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg">
            </a>
            <a class="hover-animation" href="public/html/pc-gamer-delios.html">
                <div class="miniatura-equipo">
                    <div class="descripcion">
                        <div class="descripcion-contenedor">
                            <img class="vista-previa-producto-imagen"
                                src="${arregloPCGamer[2].ruta_imagen_1}">
                            <div class="vista-previa-producto-texto">${arregloPCGamer[2].nombre_producto}</div>
                        </div>
                    </div>
                    <img src="public/assets/img/resources/index/carousel-pc-recomendada/background.png">
                </div>
                <img class="miniatura-videojuego" src="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg">
            </a>
            <a class="hover-animation" href="public/html/pc-gamer-delios.html">
                <div class="miniatura-equipo">
                    <div class="descripcion">
                        <div class="descripcion-contenedor">
                            <img class="vista-previa-producto-imagen"
                                src="${arregloPCGamer[6].ruta_imagen_1}">
                            <div class="vista-previa-producto-texto">${arregloPCGamer[6].nombre_producto}</div>
                        </div>
                    </div>
                    <img src="public/assets/img/resources/index/carousel-pc-recomendada/background.png">
                </div>
                <img class="miniatura-videojuego" src="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg">
            </a>
            <a class="hover-animation" href="public/html/pc-gamer-delios.html">
                <div class="miniatura-equipo">
                    <div class="descripcion">
                        <div class="descripcion-contenedor">
                            <img class="vista-previa-producto-imagen"
                                src="${arregloPCGamer[8].ruta_imagen_1}">
                            <div class="vista-previa-producto-texto">${arregloPCGamer[8].nombre_producto}</div>
                        </div>
                    </div>
                    <img src="public/assets/img/resources/index/carousel-pc-recomendada/background.png">
                </div>
                <img class="miniatura-videojuego" src="https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg">
            </a>
            <a class="hover-animation" href="public/html/pc-gamer-delios.html">
                <div class="miniatura-equipo">
                    <div class="descripcion">
                        <div class="descripcion-contenedor">
                            <img class="vista-previa-producto-imagen"
                                src="${arregloPCGamer[10].ruta_imagen_1}">
                            <div class="vista-previa-producto-texto">${arregloPCGamer[10].nombre_producto}</div>
                        </div>
                    </div>
                    <img src="public/assets/img/resources/index/carousel-pc-recomendada/background.png">
                </div>
                <img class="miniatura-videojuego" src="https://static-cdn.jtvnw.net/ttv-boxart/506410_IGDB-285x380.jpg">
            </a>
            <a class="hover-animation" href="public/html/pc-gamer-delios.html">
                <div class="miniatura-equipo">
                    <div class="descripcion">
                        <div class="descripcion-contenedor">
                            <img class="vista-previa-producto-imagen"
                                src="${arregloPCGamer[14].ruta_imagen_1}">
                            <div class="vista-previa-producto-texto">${arregloPCGamer[14].nombre_producto}</div>
                        </div>
                    </div>
                    <img src="public/assets/img/resources/index/carousel-pc-recomendada/background.png">
                </div>
                <img class="miniatura-videojuego" src="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg">
            </a>
            <a class="hover-animation" href="public/html/pc-gamer-delios.html">
                <div class="miniatura-equipo">
                    <div class="descripcion">
                        <div class="descripcion-contenedor">
                            <img class="vista-previa-producto-imagen"
                                src="${arregloPCGamer[12].ruta_imagen_1}">
                            <div class="vista-previa-producto-texto">${arregloPCGamer[12].nombre_producto}</div>
                        </div>
                    </div>
                    <img src="public/assets/img/resources/index/carousel-pc-recomendada/background.png">
                </div>
                <img class="miniatura-videojuego" src="https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg">
            </a>
            <a class="hover-animation" href="public/html/pc-gamer-delios.html">
                <div class="miniatura-equipo">
                    <div class="descripcion">
                        <div class="descripcion-contenedor">
                            <img class="vista-previa-producto-imagen"
                                src="${arregloPCGamer[11].ruta_imagen_1}">
                            <div class="vista-previa-producto-texto">${arregloPCGamer[11].nombre_producto}</div>
                        </div>
                    </div>
                    <img src="public/assets/img/resources/index/carousel-pc-recomendada/background.png">
                </div>
                <img class="miniatura-videojuego" src="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg">
            </a>
            <a class="hover-animation" href="public/html/pc-gamer-delios.html">
                <div class="miniatura-equipo">
                    <div class="descripcion">
                        <div class="descripcion-contenedor">
                            <img class="vista-previa-producto-imagen"
                                src="${arregloPCGamer[13].ruta_imagen_1}">
                            <div class="vista-previa-producto-texto">${arregloPCGamer[13].nombre_producto}</div>
                        </div>
                    </div>
                    <img src="public/assets/img/resources/index/carousel-pc-recomendada/background.png">
                </div>
                <img class="miniatura-videojuego" src="https://static-cdn.jtvnw.net/ttv-boxart/30921-285x380.jpg">
            </a>
            <a class="hover-animation" href="public/html/pc-gamer-delios.html">
                <div class="miniatura-equipo">
                    <div class="descripcion">
                        <div class="descripcion-contenedor">
                            <img class="vista-previa-producto-imagen"
                                src="${arregloPCGamer[5].ruta_imagen_1}">
                            <div class="vista-previa-producto-texto">${arregloPCGamer[5].nombre_producto}</div>
                        </div>
                    </div>
                    <img src="public/assets/img/resources/index/carousel-pc-recomendada/background.png">
                </div>
                <img class="miniatura-videojuego" src="https://static-cdn.jtvnw.net/ttv-boxart/493057-285x380.jpg">
            </a>
            <a class="hover-animation" href="public/html/pc-gamer-delios.html">
                <div class="miniatura-equipo">
                    <div class="descripcion">
                        <div class="descripcion-contenedor">
                            <img class="vista-previa-producto-imagen"
                                src="${arregloPCGamer[7].ruta_imagen_1}">
                            <div class="vista-previa-producto-texto">${arregloPCGamer[7].nombre_producto}</div>
                        </div>
                    </div>
                    <img src="public/assets/img/resources/index/carousel-pc-recomendada/background.png">
                </div>
                <img class="miniatura-videojuego" src="https://static-cdn.jtvnw.net/ttv-boxart/460630-285x380.jpg">
            </a>
            <a class="hover-animation" href="public/html/pc-gamer-delios.html">
                <div class="miniatura-equipo">
                    <div class="descripcion">
                        <div class="descripcion-contenedor">
                            <img class="vista-previa-producto-imagen"
                                src="${arregloPCGamer[9].ruta_imagen_1}">
                            <div class="vista-previa-producto-texto">${arregloPCGamer[9].nombre_producto}</div>
                        </div>
                    </div>
                    <img src="public/assets/img/resources/index/carousel-pc-recomendada/background.png">
                </div>
                <img class="miniatura-videojuego" src="https://static-cdn.jtvnw.net/ttv-boxart/488552-285x380.jpg">
            </a>
    `;
    $('.carousel-games').slick({
        infinite: true,
        slidesToShow: 5,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: false
                }
            }
        ]
    });

}


$('.banners-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
            }
        }
    ]

});



$('.comentarios-carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: false
            }
        }
    ]

});

function catalogo() {
    for (let index = 10; index > 0; index--) {
        const cartaAzul = document.createElement("div");
        cartaAzul.classList = 'col-lg-4 col-md-6 col-sm-12'
        cartaAzul.innerHTML = `
        <div class="m-1 carta-productos p-3">
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
    $('.productos-carousel').slick({
        infinite: true,
        slidesToShow: 5,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
    });
}