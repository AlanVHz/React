import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [ images, setImages ] = useState([]);

    // useEffect hace que el codigo dentro sólo se ejecute la primera ocasión donde se renderiza el componente
    useEffect( () => { 
        getGiphy();
    }, [] );

    const getGiphy = async () => {
        const api_key = "WDvTgX49SR4iLfix2bmIw0vQkaoi2l2p";	
        const limit = "10";
        let endpoint = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=${limit }&api_key=${ api_key }`;

        const response = await fetch(endpoint);
        const { data } = await response.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        setImages( gifs );
    }

    getGiphy();

    return (
        <div>
            <h3> { category } </h3>

            {
                images.map( (img) => {
                    return <GifGridItem key={ img.id } { ...img } />
                })
            }
            
        </div>
    )
}
