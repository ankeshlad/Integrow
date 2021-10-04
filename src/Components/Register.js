import React from 'react';
import './LoginForm.css';
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import google from '../assets/google.png'
import Toggle from 'react-toggle'


class Register extends React.Component{
    constructor(props){
        super(props)
            this.state ={
                cheeseIsReady: false
            }
        }
    
    render(){
        return(
        <div className ="Container">
            <h3>Create New Account</h3>
            <div className = "logoContainer">
                <img className = "logo" src = {facebook}/>
                <img className = "logo" src = {twitter}/>
                <img className = "logo" src = {google}/>
            </div>
            <p>or use your email account</p>
            <div className="textlabel">
                <span class='blocking-span'>
                    <input type="text" class="inputText1" required/>
                    <h4><span class="floating-label" style={{color: "#6EA642"}} >Email </span></h4>
                </span>
            </div>
            <div className="textlabel">
                <span class='blocking-span'>
                    <input type="text" class="inputText1" required/>
                    <h4><span class="floating-label" style={{color: "#6EA642"}}>Name </span></h4>
                </span>
            </div>
            <div>
                <button class="loginbutton" value="register">REGISTER</button>
            </div>
           
                <h5>Already have an account? <span style={{color:"#6EA642"}}><a href="/" class='fgtpsw'>Login here</a></span></h5>
            <div>
                <button class="loginasadmin">Login as admin</button>
            </div>
           
        </div>
        )}
}
export default Register