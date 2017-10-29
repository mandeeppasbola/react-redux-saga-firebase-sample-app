import React from 'react';
import {login, resetPassword} from '../api';
import {Link} from 'react-router-dom';

const Login = () => {
    let loginForm = null,
        emailInput = null,
        passwordInput = null,
        errorLabel = null;

    const handleLoginClick = () => {
        if(loginForm.checkValidity()){
            login(emailInput.value, passwordInput.value).catch((error) => {
                errorLabel.innerHTML = error.message;
            })
        } else {
            errorLabel.innerHTML = "Email and Password are required";
        }
    } 
    
    const handleResetClick = (e) => {
        e.preventDefault();
        if(emailInput.value) {
            resetPassword(emailInput.value);
        } else{
            errorLabel.innerHTML = "Email is required";
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
                <a href="#" onClick={(e) => handleResetClick(e)}>Reset Password</a>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}

export default Login;