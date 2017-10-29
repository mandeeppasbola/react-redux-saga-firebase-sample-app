import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
    <div>
        <h3>Welcome to Comment Manager app</h3>
        <p><Link to="/app">Goto App</Link></p>
    </div>
)

export default Home;