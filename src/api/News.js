import React, {Component} from 'react';

class News extends Component {
    constructor() {
        super();
        this.state = {items: []}
    }

    componentWillMount() {
        fetch('https://api.github.com/users?since=135')
            .then(response => response.json())
            .then(({result: items}) =>
                this.setState({items}))
            .catch(error => console.log('fetching mised', error))
    }


    render() {
        let items = this.state.items;
        return (
            <div>
                {items.map(item =>
                    <Person key={item.id} person={item}/>
                )}
            </div>
        )
    }
}

const Person = (props) => {
    return (
        <div>
            <h1>{props.person.login}</h1>
            <h3>{props.person.id}</h3>
        </div>
    )
};


export default News;