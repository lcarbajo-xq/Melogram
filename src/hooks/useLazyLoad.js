import { useEffect, useRef, useState } from 'react'

export function useLazyLoad () {

    // Guardamos la referencia del elemento que se renderiza en el DOM
    
    const ref = useRef ( null )

    // Estado para manejar que sea visible o no cada elemento (LAZYLOAD)

    const [ Show, setShow ] = useState( false ) 

    useEffect ( function() {
        // Promesa para capturar del navegador si soporta Intersection Observer
        Promise.resolve(
            // Si devuelve algo, lo usamos con window.IntersectionObserver
            typeof window.IntersectionObserver !== 'undefined'
                ? window.IntersectionObserver 
                //Si nos devuelve 'undefined', lo inicializamos desde las dependencias

            // Para cargar la dependencia con el polyfill, usaremos un import dinámino
                : import('intersection-observer')
                    ).then( () => {
                        //El observer precisa un callback para inicializarse
                        //En el callback se ejecutará el código dependiendo de las entries
                        const observer = new window.IntersectionObserver (function (entries) {
                            const { isIntersecting } = entries[0]
                            if (isIntersecting ){
                                setShow('true')
                                observer.disconnect()
                            }
                        })
                        observer.observe(ref.current)
                    })
    }, [ ref ])

    return [ Show, ref ]

}