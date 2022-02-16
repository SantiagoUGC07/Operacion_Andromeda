let randomFunction = () => {
    return ((Math.round(Math.random() * 5)) + 1);
}

let random = randomFunction();


$('#miembro' + random).show();
$('#selector' + random).removeClass("blanco-y-negro");

//Aqui jquery escucha las imagenes que tengan la clase '.parte-de-abajo', y guarda su target
jQuery('.parte-de-abajo').click(function () {
    //pone en blanco y negro la carta que ya no esta
    $('.imagen-selector').addClass("blanco-y-negro");
    //quita todo lo que esta arriba
    $('.parte-de-arriba').hide();
    //pone color a la imagen de abajo
    $('#selector' + $(this).attr('target')).removeClass("blanco-y-negro");
    //muestra arriba la imagen que se selecciono abajo
    $('#miembro' + $(this).attr('target')).show();
});

/* tiempo(function(){
    cambiarMiembro();
}, 4000);

function cambiarMiembro () {
    //pone en blanco y negro la carta que ya no esta
    $('.imagen-selector').addClass("blanco-y-negro");
    //quita todo lo que esta arriba
    $('.parte-de-arriba').hide();
    //pone color a la imagen de abajo
    $('#selector' + $(this).attr('target')).removeClass("blanco-y-negro");
    //muestra arriba la imagen que se selecciono abajo
    $('#miembro' + $(this).attr('target')).show();
}; */