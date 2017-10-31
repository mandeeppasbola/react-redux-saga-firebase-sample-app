import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import withFirebase from '../firebase';
import {PrivateRoute, PublicRoute} from '../routes';

import Header from './header';
import Footer from './footer';
import Home from './home';
import Login from './login';
import Register from './register';
import ResetPassword from './resetPassword';
import CommentManager from './comment-manager';


class App extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			authed: false,
			loading: true 
		}
	}
	
	componentDidMount(){
		this.removeAuthListner = withFirebase(({firebaseAuth}) => {
			firebaseAuth.onAuthStateChanged((user) => {
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
		})
	}
	
	componentWillUnmount(){
		this.removeAuthListner();
	}
	
	render(){	
		return this.state.loading ? <div className="container"><h3>Loading...</h3></div> : (	
			<BrowserRouter>
				<div>
					<Header authed={this.state.authed}/>
					<div className="container">
					
					<Switch>
						<Route path="/" exact component={Home}/>						
						<PublicRoute authed={this.state.authed} path="/login" component={Login}/>
						<PublicRoute authed={this.state.authed} path="/register" component={Register}/>
						<PublicRoute authed={this.state.authed} path="/reset" component={ResetPassword}/>
						<PrivateRoute authed={this.state.authed} path="/app" component={CommentManager}/>
						<Route render={() => <h3>No Match</h3>} />
					</Switch>
					
					</div>
					<Footer/>
				</div>
			</BrowserRouter>
		)
	}
}

export default App;