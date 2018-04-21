import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from "bootstrap-without-jquery";
import style from "./css/main.css";
import Header from "./components/Header";


const element = document.getElementById('root');
ReactDOM.render(
    <Header/>,
    element);