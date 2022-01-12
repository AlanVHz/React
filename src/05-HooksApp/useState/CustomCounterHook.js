import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

function CustomCounterHook(props) {
    const { state: counter, increment, decrement, reset } = useCounter( 100 )

    return (
        <div>

            <h1>CustomCounterHook - { counter }</h1>
            <hr />

            <button onClick={ increment } className="btn btn-primary mx-3">+1</button>
            <button onClick={ reset } className="btn btn-primary mx-3">RESET</button>
            <button onClick={ decrement } className="btn btn-primary mx-3">-1</button>
        </div>
    )
}

export default CustomCounterHook

