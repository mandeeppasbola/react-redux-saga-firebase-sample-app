import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import {auth, database} from '../firebase';

import Header from './header';
import Footer from './footer';
import Home from './home';
import Login from './login';
import Register from './register';
import CommentManager from './comment-manager';


const PrivateRoute = ({ component: Component, authed, ...rest }) => (
	<Route {...rest} render={props => (authed 
		? <Component {...props}/>
		: <Redirect to={{ pathname: '/login', state: { from: props.location }}}/>
	)}/>
)

const PublicRoute = ({component: Component, authed, ...rest}) => (
	<Route {...rest} render={props => (!authed 
		? <Component {...props}/>
		: <Redirect to='/app'/>
	)}/>
)

class App extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			authed: false,
			loading: true 
		}
	}

	componentDidMount(){
		this.removeAuthListner = auth.onAuthStateChanged((user) => {
			if(user){
				this.setState({
					authed: true,
					loading: false
				})
			} else {
				this.setState({
					authed: false,
					loading: false
				})
			}
		})
	}

	componentWillUnmount(){
		this.removeAuthListner();
	}

	render(){	
		return this.state.loading ? <div className="container"><h3>Loading...</h3></div> : (	
			<div>
				<Header authed={this.state.authed}/>
				<div className="container">	
					<Switch>
						<Route path="/" exact component={Home}/>						
						<PublicRoute authed={this.state.authed} path="/login" component={Login}/>
						<PublicRoute authed={this.state.authed} path="/register" component={Register}/>
						<PrivateRoute authed={this.state.authed} path="/app" component={CommentManager}/>
						<Route render={() => <h3>No Match</h3>} />
					</Switch>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default App;