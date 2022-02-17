
let miembroActual = 0;
let start = true;

let primeroQueVaSalir = () => {
    return ((Math.round(Math.random() * 5)) + 1);
};

let colocarAlPrimero = () => {
    miembroActual = primeroQueVaSalir();
    $('#selector' + miembroActual).removeClass("blanco-y-negro");
    $('#miembro' + miembroActual).show();
    $('#selector' + miembroActual).addClass("clase-parpadeo");
}

colocarAlPrimero();

let siguienteMiembro = () => {
    if (miembroActual == 6) {
        miembroActual = 1;
    } else {
        miembroActual++;
    }
};

let mostrarSiguienteMiembro = () => {
    $('.imagen-selector').addClass("blanco-y-negro");
    $('.imagen-selector').removeClass("clase-parpadeo");
    $('.imagen-selector').removeClass("parpadeo-b");
    $('.imagen-selector').removeClass("parpadeo-a");
    $('.parte-de-arriba').hide();

    $('#selector' + miembroActual).removeClass("blanco-y-negro");
    $('#miembro' + miembroActual).show();
    $('#selector' + miembroActual).addClass("clase-parpadeo");
};

let tiempo = setInterval(function () {
    siguienteMiembro();
    mostrarSiguienteMiembro();
}, 3000);

jQuery('.parte-de-abajo').click(function () {
    $('.imagen-selector').addClass("blanco-y-negro");
    $('.imagen-selector').removeClass("clase-parpadeo");
    $('.imagen-selector').removeClass("parpadeo-b");
    $('.imagen-selector').removeClass("parpadeo-a");
    $('.parte-de-arriba').hide();

    $('#selector' + $(this).attr('target')).removeClass("blanco-y-negro");
    $('#miembro' + $(this).attr('target')).show();
    $('#selector' + $(this).attr('target')).addClass("clase-parpadeo");
    clearInterval(tiempo);
});

let parpadeo = setInterval(function () {
    if (start == true) {
        $(".clase-parpadeo").removeClass("parpadeo-b");
        $(".clase-parpadeo").addClass("parpadeo-a");
        start = false;
    }
    else {
        $(".clase-parpadeo").removeClass("parpadeo-a");
        $(".clase-parpadeo").addClass("parpadeo-b");
        start = true;
    }
}, 500);