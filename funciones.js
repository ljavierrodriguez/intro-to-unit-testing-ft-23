function sumar(a, b){
    let result = a + b;
    return result;
}

function restar(a, b){
    return a - b;
}

function esMayor(edad){
    return edad >= 18 ? true : false;
}

function esPar(num){
    return num % 2 === 0 ? true : false
}

function esInpar(num){
    return num % 2 !== 0 ? true : false
}

function longitudCadena(string = ""){
    if (typeof(string) !== 'string') return "Debe ser una cadena de caracteres"
    return string.length;
}

// Exportando la funcion sumar por defecto
// module.exports = sumar;

module.exports = {
    sumar,
    restar,
    esMayor,
    esPar,
    esInpar,
    longitudCadena
}