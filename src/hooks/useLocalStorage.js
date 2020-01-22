import { useState } from 'react';

export function useLocalStorage (key, initialValue) {

    //Estado local para cargar los valores del local storage

    const [ storedValue, setStoredValue ] = useState ( () => {

        //Untentamos obtener el valor de la key unica del local storage y si no devuelve nada
        //El valor será el inicial. El valor devuelto será ITEM

        //Se debe parsear el valor obtenido del local storage

        try {
           const item = window.localStorage.getItem(key)
           return item !== null ? JSON.parse(item) : initialValue
        }catch (e){
            console.error(e)
            return initialValue
        }
    } )

    //Para modificar el local storage, usamos setLocalStorage a partir del valor obnetido y 
    //lo guardamos en el estado

    const setLocalStorage = value => { 
        try { 
            window.localStorage.setItem (key, JSON.stringify(value))
            setStoredValue(value)
        } catch(e) {
            console.error(e)
        }
    }

    return [ storedValue, setLocalStorage ]
}