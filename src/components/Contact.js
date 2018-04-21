import React from 'react';

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'New component contact'
        }
    }

// just an example of life cycle with setState

    componentWillMount() {
        this.setState((state) => ({
            text: 'Our Contact'
        }))
    }

    render() {

        return (
            <div className="extra-block color-red">{this.state.text}</div>
        )
    }
}

export default Contact;