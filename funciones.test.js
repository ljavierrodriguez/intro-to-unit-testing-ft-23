const { sumar, restar, esMayor } = require('./funciones');

describe('Validaciones sobre la funcion sumar', () => {
    test('La funcion sumar debe estar definida', () => {
        expect(sumar).toBeDefined()
    })
    
    test('La funcion sumar debe recibir dos argumentos ', () => {
        expect(sumar).toHaveProperty('length', 2)
    })
    
    test('La suma de 5 + 7 debe retornar 12', () => {
        expect(sumar(5, 7)).toBe(12)
    })
    
    test('La suma de 2 + 2 debe retornar 4', () => {
        expect(sumar(2, 2)).toBe(4)
    })
})

describe('Validaciones sobre la funcion restar', () => {
    test('La funcion restar debe estar definida', () => {
        expect(restar).toBeDefined()
    })
})

describe('Validaciones a la funcion esMayor', () => {
    test('Luis tiene 16 validar si es mayor de edad', () => {
        expect(esMayor(16)).toBeFalsy()
    })

    test('Ana tiene 20 validar si es mayor de edad', () => {
        expect(esMayor(20)).toBeTruthy()
    })

    test('Pedro tiene 12 no es mayor de edad debe devolver falso', () => {
        expect(esMayor(12)).toBeFalsy()
    })
})
