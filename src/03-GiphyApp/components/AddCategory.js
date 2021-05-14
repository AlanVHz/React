import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddCategory({ setCategories }) {

    const [inputState, setInputValue] = useState("...");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputState.trim() !== "" ) {
            // No necesitamos inserter categories en las props porque es suficiente con la
            // referencia que nos entrega SetCategories
            setCategories( cat => [ inputState,  ...cat, ] )
            setInputValue("");
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input  
                type = "text"
                value = { inputState }
                onChange = { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

export default AddCategory

