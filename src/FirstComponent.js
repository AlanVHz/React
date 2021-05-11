// Functional components
import React, { Fragment } from "react";
import PropTypes from "prop-types";

const FirstApp = () => {

    const name = "Alan"
    const obj = {
        lastname: "Vargas",
        age: 24
    }
    // Sólo para primitivos
    return <h1>¡Hola Mundo { name } { obj.lastname }!</h1>

}

const fragmentsExample = () => {
    return (
        <Fragment>
            <h1>Header inside a fragment tag</h1>
            <p>Lorem Ipsum</p>
        </Fragment>
    )
}

// Todos los componentes reciben props, y también pueden tener valores por defecto.
// ({ saludo = "Valor por defecto" } ) => {  }

const SimpleFragmentExample = ( { saludo } ) => {
    return (
        <>
            <h1>Header inside a fragment tag</h1>
            <p>Prop: { saludo }</p>
        </>
    )
}

// También podemos obligar a usar props en el componente para evitar errores
SimpleFragmentExample.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default SimpleFragmentExample;