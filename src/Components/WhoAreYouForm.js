import React from 'react';
import WhoAreYou from './WhoAreYou'
import './Login.css'
import logo from '../assets/bg2.jpg';
const whoAreYou = () => {
    return(
        <div className = "mainContainer">
            <img src={logo}/>

            <WhoAreYou />
        </div>
    )
}
const signUp = () => {

}
export default whoAreYou;