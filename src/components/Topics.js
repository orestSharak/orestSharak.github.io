import React from 'react';
import {Link, Route} from 'react-router-dom';
import Contact from "./Contact";
import topics from '../api/Api';

const Topics = ({match}) => {
    return (
        <div>
            <h1>Topics</h1>
            <ul className="list">
                {topics.map(i => (
                    <li key={i.id}>
                        <Link to={{
                            pathname: `/topic/${i.id}`
                        }}>{i.name}</Link>
                    </li>
                ))}
            </ul>
            <Contact/>

        </div>
    )
};

export default Topics;
