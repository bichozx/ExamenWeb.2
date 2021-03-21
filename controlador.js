let precioHambur = 10000;
let precioPerro = 8000;
let precioSalchipapas = 6000;
let precioChorizo = 7000;
let opcion = document.getElementsByName("plato")[0];
let ordenes = document.getElementById("Numerodeordenes");
let excoges = document.getElementsByName("excoger")[0];
let desch = 0;
let descs = 0;
let descp = 0;
let descch = 0;
let totalh = 0;
let totalp = 0;
let totals = 0;
let totalch = 0;
let ham = 0;
let perr = 0;
let sal = 0;
let cho = 0;





const compra = () => {

    if (opcion.value == "Hamburguesa" && ordenes.value >= "3") {

        ham = (ordenes.value * precioHambur);
        totalh = ham * 0.10
        desch = ham - totalh;

        alert("tiene un descuento el total a pagar es: " + desch);

    }

    if (opcion.value == "Perros" && ordenes.value >= "3") {

        perr = (ordenes.value * precioPerro);
        totalp = perr * 0.10
        descp = perr - totalp;

        alert("tiene un descuento el total a pagar es: " + descp);

    }

    if (opcion.value == "Salchipapas" && ordenes.value >= "3") {

        sal = (ordenes.value * precioSalchipapas);
        totals = sal * 0.10
        descs = sal - totals;

        alert("tiene un descuento el total a pagar es: " + descs);

    }
    if (opcion.value == "Chorizo" && ordenes.value >= "3") {

        cho = (ordenes.value * precioChorizo);
        totalch = cho * 0.10
        descch = cho - totalch;

        alert("tiene un descuento el total a pagar es: " + descch);

    }

}








let realizarcompra = document.getElementById('comprar');
realizarcompra.addEventListener("click", compra);