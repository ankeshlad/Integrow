import React from 'react';
import ThankYou from './ThankYou'
import './Login.css'
import logo from '../assets/bg2.jpg';
const thankYou = () => {
    return(
        <div className = "mainContainer">
            <img src={logo}/>

            <ThankYou />
        </div>
    )
}
const signUp = () => {

}
export default thankYou;