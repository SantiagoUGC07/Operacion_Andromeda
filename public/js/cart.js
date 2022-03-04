let subtotalPedido = 0;
let subtotalPedidoLargo = 0;
let costoEnvio = 0;
let totalPedido = 0;



$('.next').on('click', function () {
    moveTab("Next");
});

$('.back').on('click', function () {
    moveTab("Previous");
});

$('.remover').on('click', function () {
    $(this).parent().parent().remove();
    calculoTotal();
});

function moveTab(nextOrPrev) {
    let currentTab = "";
    $('#myTab li').each(function () {
        if ($(this).children("a").hasClass('active')) {
            currentTab = $(this);
        }
    });
    if (nextOrPrev == "Next") {
        currentTab.children("a").removeClass('active');
        currentTab.next().children("a").tab("show");
    } else if (nextOrPrev == "Previous") {
        currentTab.children("a").removeClass('active');
        currentTab.prev().children("a").tab("show");
    }
}

$('#borrar').on('click', function () {
    $('#contenido').hide();
    $('#completaste').show();
});

$("input[type='number']").inputSpinner()

$(".multiplicar").change(function () {
    calculadora($(this));
});

function calculadora(element) {
    let total
    let subtotal = element.parent().parent().parent().find(".subtotal").children().text()
    let multiplicador = element.val()
    total = subtotal * multiplicador;
    element.parent().parent().parent().find(".total").children().html(total)
    if (element.val() == 0) {
        element.parent().parent().parent().remove();
    }
    calculoTotal();
}


$(".costo-de-envio").change(function () {
    $('.no-elegiste').hide();
    $('.ya-elegiste').show();
    costoEnvio = parseInt(($(this).val()));
    calculoTotal();
});



function calculoTotal() {
    let todo = [];
    todo = $.map($(".total"), function (select) {
        return $(select).children().text();
    });
    subtotalPedido = 0;
    for (let i = 0; i < todo.length; i++) {
        subtotalPedido += parseInt(todo[i]);
    }
    $('.subtotalPedido').text(subtotalPedido);
    $('.subtotalPedidoLargo').text(todo.length);
    totalPedido = 0;
    totalPedido = costoEnvio + subtotalPedido;
    $('.totalPedido').text(totalPedido);
}
calculoTotal();

