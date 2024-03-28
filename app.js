// Definimos la cotizacion de las monedas
// dolares
let dolares_cotizacionPesos = 16.54;
let dolares_cotizacionSoles = 3.71;
// soles
let soles_cotizacionDolares = 0.27;
let soles_cotizacionPesos = 4.44;
// pesos
let pesos_cotizacionDolares = 0.060;
let pesos_cotizacionSoles = 0.22;

// Definimos una funcion para que nos calcule el cambio de divisa
function calcular (cantidad, cotizacion){
    return cantidad*cotizacion;
}
// Utilizamos una serie de condicionales para hacer el cambio de divisas

function cambioDeDivisa(){
    if ((monedaInicial.value === monedaFinal.value) & (monedaInicial.value != "") & (monedaFinal.value != "")) {
        alert("El cambio de divisa es entre dos monedas distintas");
    }
    if ((monedaInicial.value == '') || (monedaFinal.value == '')){
        alert("Seleccione las monedas primero para que se realice la operacion");
    }
    if ((monedaInicial.value == 'Soles') & (monedaFinal.value == 'Dolares')){
        resultado = calcular(Number(document.querySelector(".cantidad").value), soles_cotizacionDolares );
        resultado = resultado.toFixed(2);
        document.querySelector(".resultado").innerHTML = resultado;
    }
    if ((monedaInicial.value == 'Soles') & (monedaFinal.value == 'Pesos Mexicanos')){
        resultado = calcular(Number(document.querySelector(".cantidad").value), soles_cotizacionPesos );
        resultado = resultado.toFixed(2);
        document.querySelector(".resultado").innerHTML = resultado;
    }
    if ((monedaInicial.value == 'Dolares') & (monedaFinal.value == 'Pesos Mexicanos')){
        resultado = calcular(Number(document.querySelector(".cantidad").value), dolares_cotizacionPesos );
        resultado = resultado.toFixed(2);
        document.querySelector(".resultado").innerHTML = resultado;
    }
    if ((monedaInicial.value == 'Dolares') & (monedaFinal.value == 'Soles')){
        resultado = calcular(Number(document.querySelector(".cantidad").value), dolares_cotizacionSoles );
        resultado = resultado.toFixed(2);
        document.querySelector(".resultado").innerHTML = resultado;
    }
    if ((monedaInicial.value == 'Pesos Mexicanos') & (monedaFinal.value == 'Dolares')){
        resultado = calcular(Number(document.querySelector(".cantidad").value), pesos_cotizacionDolares );
        resultado = resultado.toFixed(2);
        document.querySelector(".resultado").innerHTML = resultado;
    }
    if ((monedaInicial.value == 'Pesos Mexicanos') & (monedaFinal.value == 'Soles')){
        resultado = calcular(Number(document.querySelector(".cantidad").value), pesos_cotizacionSoles );
        resultado = resultado.toFixed(2);
        document.querySelector(".resultado").innerHTML = resultado;
    }
}

function avanzar(){
    if (document.querySelector(".nombre").value == ''){
        alert("Ingrese primero su nombre");
        return;
    }
    if (document.querySelector(".nombre").value != ''){
        let textInicial = document.querySelector(".vistaInicial");
        textInicial.setAttribute("hidden","false");
        let textFinal = document.querySelector(".vistaFinal");
        textFinal.removeAttribute("hidden")
        let nombre = document.querySelector(".nombre").value;
        var str = 'Hola, ' + nombre + 
        '. Bienvenido a nuestro conversor de divisas';
        document.querySelector(".textoBienvenida").innerHTML = str;
        return;
    }
}