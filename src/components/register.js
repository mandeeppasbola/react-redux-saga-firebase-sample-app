import React from 'react';
import {register} from '../api';
import {Link} from 'react-router-dom';

const Register = ({history}) => {
    let regForm = null,
    nameInput = null,
    emailInput = null,
    passwordInput = null,
    confirmPasswordInput = null,
    errorLabel = null;

    const handleRegClick = () => {
        if(regForm.checkValidity()){
            errorLabel.innerHTML = "";
            register(nameInput.value, emailInput.value, passwordInput.value).then(()=>{
                history.push('/login');
            })
            .catch((error) => {
                errorLabel.innerHTML = error.message;
            })
            regForm.reset();
        } else {
            errorLabel.innerHTML = "Name, Email, Password are required";
        }
    }
    return(
        <div className="auth-container">
            <h3>Register</h3>
            <form ref={(form) => {regForm = form}}>
                <label className="form-error" ref={(label) => {errorLabel = label}}></label>
                <input type="text" placeholder="Name" ref={(input) => {nameInput = input}} required/>
                <input type="text" placeholder="Email" ref={(input) => {emailInput = input}} required/>
                <input type="password" placeholder="Password" ref={(input) => {passwordInput = input}} required/>
                <input type="password" placeholder="Confirm Password" ref={(input) => {confirmPasswordInput = input}} required/>
                <button type="button" onClick={() => {handleRegClick()}}>Register</button>
            </form>
            <div className="links">
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Register;