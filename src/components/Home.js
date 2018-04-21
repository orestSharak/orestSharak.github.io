import React from 'react';
import Contact from "./Contact";

class Home extends React.Component {
    render() {
        return (

            <div>
                <div>
                    <h1>Welcome to the Home page!</h1>
                    <p> Feel free to browse around and learn more about me.</p>
                </div>
                <Contact/>

            </div>
        )
    }
}

export default Home