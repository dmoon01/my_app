import React from 'react';
import {Route, Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>
                <Link to="/join">Sign Up</Link>
            </h1>
        </div>
    );
};

export default Home ;