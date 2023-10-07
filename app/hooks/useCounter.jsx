'use client'

import { useState } from "react";


//Custom Hook creado para devolver un valor, poder incrementarlo, y decrementarlo
export function useCounter(initialValue = 0) {
    // Valor del COUNTER
    const [counter, setCounter] = useState(initialValue)

    //Funcion de incremento del COUNTER    
    const increment = () => setCounter(counter+1)

    //Funcion de decremento del COUNTER    
    const decrement = () => setCounter(counter-1)

    //Funcion de reseteo del COUNTER    
    const reset = () => setCounter(0)

    //Objeto devuelto, con valor del CONTADOR y sus funciones
    return {counter, increment, decrement, reset}
}