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

// Exportando la funcion sumar por defecto
// module.exports = sumar;

module.exports = {
    sumar,
    restar,
    esMayor
}