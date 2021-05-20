import { useEffect, useState } from "react";
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    // useEffect hace que el codigo dentro sólo se ejecute la primera ocasión donde se renderiza el componente
    useEffect( () => { 
        getGifs( category ).then( 
            (gifs) => setState({ data: gifs, loading: false }) 
            );
    }, [] ); // añadimos category al arreglo para quitar el warning de consola

    return state;

}


