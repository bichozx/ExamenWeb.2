let precioHambur2 = 10000;
let precioPerro2 = 8000;
let precioSalchipapas2 = 6000;
let precioChorizo2 = 7000;
let opcion2 = document.getElementsByName("plato")[0];
let ordenes2 = document.getElementById("Numerodeordenes");
let excoges2 = document.getElementsByName("excoger")[0];
let desch2 = 0;
let descs2 = 0;
let descp2 = 0;
let descch2 = 0;
let totalh2 = 0;
let totalp2 = 0;
let totals2 = 0;
let totalch2 = 0;
let ham2 = 0;
let perr2 = 0;
let sal2 = 0;
let cho2 = 0;





const comprapropina = () => {

    if (opcion222.value == "Hamburguesa" && excoges2.value == "Si") {

        ham2 = (ordenes2.value * precioHambur2);
        totalh2 = ham2 * 0.10
        desch2 = ham2 + totalh2;

        alert("tiene un descuento el total a pagar es: " + desch2);

    }

    if (opcion2.value == "Perros" && excoges2.value == "Si") {

        perr2 = (ordenes2.value * precioPerro2);
        totalp2 = perr2 * 0.10
        descp2 = perr2 + totalp2;

        alert("tiene un descuento el total a pagar es: " + descp2);

    }

    if (opcion2.value == "Salchipapas" && excoges2.value >= "Si") {

        sal2 = (ordenes2.value * precioSalchipapas2);
        totals2 = sal2 * 0.10
        descs2 = sal2 + totals2;

        alert("tiene un descuento el total a pagar es: " + descs2);

    }
    if (opcion2.value == "Chorizo" && excoges2.value >= "Si") {

        cho = (ordenes2.value * precioChorizo2);
        totalch2 = cho2 * 0.10
        descch2 = cho2 + totalch2;

        alert("tiene un descuento el total a pagar es: " + descch2);

    }

}








let realizarcompra2 = document.getElementById('comprar');
realizarcompra2.addEventListener("click", comprapropina);