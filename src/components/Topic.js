import React from 'react';
import {Route, Link} from 'react-router-dom';
import Resource from "./Resource";

const Topic = ({match}) => {
    const topic = topics.find(({id}) =>
        id === match.params.topicId);
    return (
        <div className="current">
            <h1>Topic ID: {match.params.topicId}</h1>
            <h1>{topic.name}</h1>
            <p>{topic.description}</p>
            <ul>
                {topic.resources.map((sub) => (
                    <li key={sub.id}>
                        <Link to={
                            `${match.url}/${sub.id}`}>
                            {sub.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Route path={`${match.path}/:subId`} component={Resource}/>
        </div>
    )

};

export default Topic;
