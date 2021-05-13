import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ( { value } ) => {

    const [counter, setCounter] = useState( value )

    const handleOperation = ( isAddition ) => {
        //setCounter( counter + 1)
        ( isAddition ) ? 
        setCounter( (counter) => counter + 1 ) : 
        setCounter( (counter) => counter - 1 ) 
    }

    const handleReset = () => {
        setCounter( value );
    }

    return (
        <> 
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick= { () => handleOperation(true) } > +1 </button>
            <button onClick= { handleReset } > Reset </button>
            <button onClick= { () => handleOperation(false) } > -1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;