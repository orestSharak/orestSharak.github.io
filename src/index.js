import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Bootstrap from "bootstrap-without-jquery"; // for feature bootstrap
import style from "./css/main.css";
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import Topics from "./components/Topics";
import Topic from "./components/Topic";
import Resource from "./components/Resource";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/schedule'>Schedule</Link></li>
                        <li><Link to='/topics'>Topics</Link></li>
                    </ul>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/schedule' component={Schedule}/>
                    <Route path='/topics' component={Topics}/>
                    <Route path="/topic/:id" component={Topic}/>
                    <Route path="/resource/:id" component={Resource}/>
                </div>
            </Router>
        )
    }
}

const element = document.getElementById('root');
ReactDOM.render(
    <App/>,
    element);