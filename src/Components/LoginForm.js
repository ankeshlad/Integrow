import React from 'react';
import './LoginForm.css';
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import google from '../assets/google.png'
import Toggle from 'react-toggle'

class LoginForm extends React.Component{
    constructor(props){
        super(props)
            this.state ={
                cheeseIsReady: false
            }
            
        }
    
    render(){
        return(
        <div className ="Container">
            <h3>Login to your account</h3>
            <div className = "logoContainer">
                <img className = "logo" src = {facebook}/>
                <img className = "logo" src = {twitter}/>
                <img className = "logo" src = {google}/>
            </div>
            <p>or use your email account</p>
            <div className="textlabel">
                <span class='blocking-span'>
                    <input type="text" class="inputText" required/>
                    <h4><span class="floating-label" style={{color: "#6EA642"}} >Email </span></h4>
                </span>
            </div>
            <div className="textlabel">
                <span class='blocking-span'>
                    <input type="password" class="inputText" required/>
                    <h4><span class="floating-label" style={{color: "#6EA642"}}>Password </span></h4>
                </span>
            </div>
            <div className = "toggleContainer">
            <Toggle
                id='cheese-status'
                defaultChecked={this.state.cheeseIsReady}
                onChange={this.handleCheeseChange} />
                <label htmlFor='cheese-status' >&nbsp;&nbsp;Remember me</label>
                <h4 style={{margin : "auto", color:"#6EA642"}}><a href="#" class='fgtpsw'>Forgot Password?</a></h4>
            </div>
            <div>
                <button class="loginbutton">LOGIN</button>
            </div>
           
                <h5>Don't have an account? <span style={{color:"#6EA642"}}><a href="/Register.js" class='fgtpsw'>Register Here</a></span></h5>
            <div>
                <button class="loginasadmin">Login as admin</button>
            </div>
           
        </div>
        )}
}
export default LoginForm