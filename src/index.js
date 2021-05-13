import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
import './index.css'

const myRoot = document.querySelector("#root");

ReactDOM.render( <CounterApp value={ 30 }/>, myRoot );
