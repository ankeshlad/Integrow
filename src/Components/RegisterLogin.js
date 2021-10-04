import React from 'react';
import Register from './Register'
import './Login.css'
import logo from '../assets/bg2.jpg';
const Login = () => {
    return(
        <div className = "mainContainer">
            <img src={logo}/>

            <Register />
        </div>
    )
}
const signUp = () => {

}
export default Login;