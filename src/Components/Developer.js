import React from 'react';
import DeveloperForm from './DeveloperForm'
import './Login.css'
import logo from '../assets/bg2.jpg';
const Login = () => {
    return(
        <div className = "mainContainer">
            <img src={logo}/>

            <DeveloperForm />
        </div>
    )
}
const signUp = () => {

}
export default Login;