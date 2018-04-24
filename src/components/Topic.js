import React from 'react';
import {Route, Link} from 'react-router-dom';
import topics from '../api/Api';

const Topic = ({match}) => {
    const topic = topics.find(({id}) =>
        id === match.params.id);

    return (
        <div className="current">
            <h1>{topic.name}</h1>
            <p>{topic.description}</p>

            <ul className="list">
                {topic.resources.map(i => (
                    <li key={i.id}>
                        <Link to={{
                            pathname: `/resource/${i.id}`
                        }}>
                            {i.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Topic;
