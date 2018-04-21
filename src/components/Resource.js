import React from 'react';

const Resource = ({match}) => {
    const topic = topic.find(({ id }) => id === match.params.topicId)
        .resources.find(({ id }) => id === match.params.subId);
    return (
        <div>
            <h1>{topic.name}</h1>
            <p>{topic.description}</p>
            <a href={topic.url}>More info</a>
        </div>
    )
};

export default Resource
