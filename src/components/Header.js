import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import Schedule from './Schedule'
import Topics from './Topics';

class Header extends React.Component {
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
                </div>
            </Router>



        )
    }
}

export default Header