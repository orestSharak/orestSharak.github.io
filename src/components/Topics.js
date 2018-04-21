import React from 'react';
import {Link, Route} from 'react-router-dom';
import Topic from './Topic';
import Contact from "./Contact";
import topics from '../api/Api'
const Topics = ({match}) => {
    return (
        <div>
            <h1>Topics</h1>
            <ul className="list">
                {topics.map(({name, id}) => (
                    <li key={id}>
                        <Link to={`${match.url}/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <Route path={`${match.path}/:topicId`} component={Topic}/>
            <Contact/>

        </div>
    )
};

export default Topics;
