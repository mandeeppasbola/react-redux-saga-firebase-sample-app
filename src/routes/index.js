import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, authed, ...rest }) => (
	<Route {...rest} render={props => (authed 
		? <Component {...props}/>
		: <Redirect to={{ pathname: '/login', state: { from: props.location }}}/>
	)}/>
)

export const PublicRoute = ({component: Component, authed, ...rest}) => (
	<Route {...rest} render={props => (!authed 
		? <Component {...props}/>
		: <Redirect to='/app'/>
	)}/>
)