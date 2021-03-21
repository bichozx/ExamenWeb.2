let precioHambur1 = 10000;
let precioPerro1 = 8000;
let precioSalchipapas1 = 6000;
let precioChorizo1 = 7000;
let opcion1 = document.getElementsByName("plato")[0];
let ordenes1 = document.getElementById("Numerodeordenes");
let excoges1 = document.getElementsByName("excoger")[0];
let desch1 = 0;
let totalh1 = 0;
let totalp1 = 0;
let ham1 = 0;
let perr1 = 0;
let sal1 = 0;
let cho1 = 0;


const comprasindescuento = () => {

    if (opcion1.value == "Hamburguesa") {

        ham1 = (ordenes1.value * precioHambur1);


        alert("El precio total es de: " + ham1);
    }


    if (opcion1.value == "Perros") {

        perr1 = (ordenes1.value * precioPerro1);


        alert("el precio total es de: " + perr1);

    }
    if (opcion1.value == "Salchipapas") {

        sal1 = (ordenes1.value * precioSalchipapas1);


        alert("el precio total es de: " + sal1);;

    }
    if (opcion1.value == "Chorizo") {

        cho1 = (ordenes1.value * precioChorizo1);


        alert("el precio total es de: " + cho1);;

    }
}




let realizarcompra1 = document.getElementById('comprar');
realizarcompra1.addEventListener("click", comprasindescuento);