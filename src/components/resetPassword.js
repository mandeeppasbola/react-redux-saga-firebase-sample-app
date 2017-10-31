import React from 'react';
import {resetPassword} from '../api';
import {Link} from 'react-router-dom';

const ResetPassword = ({history}) => {
    let resetForm = null,
        emailInput = null,
        errorLabel = null;

    const handleResetClick = () => {
        if(resetForm.checkValidity()){
            errorLabel.innerHTML="";
            resetPassword(emailInput.value).then(()=>{
                history.push('/login');
            })
            .catch((error) => {
                errorLabel.innerHTML = error.message;
            })
            resetForm.reset();
        } else {
            errorLabel.innerHTML = "Email is required";
        }
    }

    return (
        <div className="auth-container">
            <h3>Login</h3>
            <form ref={(form) => {resetForm = form}}>
                <label className="form-error" ref={(label) => {errorLabel = label}}></label>
                <input type="text" placeholder="Email" ref={(input) => {emailInput = input}} required/>
                <button type="button" onClick={() => {handleResetClick()}}>Reset Password</button>
            </form>
            <div className="links">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}

export default ResetPassword;