import React from 'react';
import LoginForm from './LoginForm'
import './Login.css'
import logo from '../assets/bg2.jpg';
const login = () => {
    return(
        <div className = "mainContainer">
            <img src={logo}/>
            <LoginForm />
       
        </div>
    )
}
const signUp = () => {

}
export default login;