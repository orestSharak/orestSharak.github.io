import React from 'react';
import topics from '../api/Api';

const Resource = ({match}) => {
    const resource = topics.find(({ id }) => id === match.params.id)
        .resources.find(({ id }) => id === match.params.id);

    return (
        <div>
            <h1>{resource.name}</h1>
            <p>{resource.description}</p>
            <a href={resource.url}>More info</a>
        </div>
    )
};

export default Resource
