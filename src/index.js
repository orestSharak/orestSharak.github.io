import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from "bootstrap-without-jquery";
import style from "./css/main.css";
import App from "./components/App";

const element = document.getElementById('root');
ReactDOM.render(
    <App/>,
    element);