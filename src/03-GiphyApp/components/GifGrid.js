import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/GetGifs';

export const GifGrid = ({ category }) => {

    const [ images, setImages ] = useState([]);

    // useEffect hace que el codigo dentro sólo se ejecute la primera ocasión donde se renderiza el componente
    useEffect( () => { 
        getGifs( category ).then( (gifs) => setImages(gifs) );
    }, [ category ]); // añadimos category al arreglo para quitar el warning de consola


    return (
        <>
            <h3> { category } </h3>
            <div className="card-grid">
                {
                    images.map( (img) => {
                        return <GifGridItem key={ img.id } { ...img } />
                    })
                }
                
            </div>
        </>
    )
}
