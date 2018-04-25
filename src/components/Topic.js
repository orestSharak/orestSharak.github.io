import React from 'react';
import topics from '../api/Api';

const Topic = ({match}) => {
    const topic = topics.find(({id}) =>
        id === match.params.id);

    return (
        <div className="current">
            <h1>{topic.name}</h1>
            <p>{topic.description}</p>
        </div>
    )
};

export default Topic;
