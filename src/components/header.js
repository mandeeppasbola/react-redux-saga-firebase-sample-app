import React from 'react';
import { Link } from 'react-router-dom';
import {logout} from '../helpers'

const Header = ({authed}) => (
    <div className="header">
        <div className="container">
            <h1><Link to="/">Comment Manager</Link></h1>
            <div className="links">
            {
                authed ? 
                <button type="button" onClick={()=> logout()}>Logout</button> : 
                null
            }  
            </div>          
        </div>
    </div>
)

export default Header;