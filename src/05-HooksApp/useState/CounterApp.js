import React, { useState } from 'react'

function CounterApp(props) {

    const [counters, setCounter] = useState({
        counter1: 10,
        counter2: 100,
        counter3: 1000,
        counter4: 10000
    })

    const {counter1, counter2, counter3, counter4} = counters

    return (
        <div>

            <h1>Counter 1 - { counter1 }</h1>
            <h1>Counter 2 - { counter2 }</h1>
            <hr />

            <button onClick={() => setCounter({ ...counters, counter1: counter1 + 1}) } className="btn btn-primary mx-3">Counter1 +1 </button>
            <button onClick={() => setCounter({ ...counters, counter2: counter2 + 10}) } className="btn btn-primary mx-3">Counter2 +10 </button>
        </div>
    )
}


export default CounterApp

