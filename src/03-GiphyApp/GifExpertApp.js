import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = (props) => {

    const [categories, setCategories] = useState(["Dragon Ball Z"]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                { 
                    categories.map( (category, index) => {
                        return  <GifGrid category={ category } key={ category } />
                    }) 
                }
            </ol>
        </>
    )
}

export default GifExpertApp

