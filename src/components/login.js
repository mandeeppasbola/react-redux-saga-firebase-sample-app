import React from 'react';
import {login} from '../api';
import {Link} from 'react-router-dom';

const Login = () => {
    let loginForm = null,
        emailInput = null,
        passwordInput = null,
        errorLabel = null;

    const handleLoginClick = () => {
        if(loginForm.checkValidity()){
            errorLabel.innerHTML = "";
            login(emailInput.value, passwordInput.value)
            .catch((error) => {
                errorLabel.innerHTML = error.message;
            })
            loginForm.reset();
        } else {
            errorLabel.innerHTML = "Email and Password are required";
        }
    } 

    return (
        <div className="auth-container">
            <h3>Login</h3>
            <form ref={(form) => {loginForm = form}}>
                <label className="form-error" ref={(label) => {errorLabel = label}}></label>
                <input type="text" placeholder="Email" ref={(input) => {emailInput = input}} required/>
                <input type="password" placeholder="Password" ref={(input) => {passwordInput = input}} required/>
                <button type="button" onClick={() => {handleLoginClick()}}>Log In</button>
            </form>
            <div className="links">
                <Link to="/reset">Reset Password</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}

export default Login;