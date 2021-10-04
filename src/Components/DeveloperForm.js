import React from 'react';
import './LoginForm.css';
import developer from '../assets/developer.png'
import twitter from '../assets/twitter.png'
import google from '../assets/google.png'

class LoginForm extends React.Component{
    constructor(props){
        super(props)
            this.state ={
                cheeseIsReady: false
            }  
        }
    render(){
        return(
        <div className ="Container3">
            <div className="logo-developer">
            <img className = "logo1-developer" src = {developer}/>
            <p className="text-content-developer">Developer</p>
            </div>
            <div>
                <span class='blocking-span'>
                    <input type="text" class="inputText-developer" placeholder=" Name*" required/>
                  
                </span>
            </div>
            <div>
                <span class='blocking-span'>
                    <input type="text" class="inputText-developer" placeholder=" Organization Name*" required/>
                </span>
            </div>
            <div>
                <span class='blocking-span'>
                    <input type="address" class="inputText-developer" placeholder=" Email Address*" required/> 
                </span>
            </div>
            <div>
                <span class='blocking-span'>
                    <input type="number" class="inputText-developer" placeholder=" OTP*" required/> 
                </span>
            </div>
            <div>
                <span class='blocking-span'>
                    <input type="number" class="inputText-developer" placeholder=" Mobile No.*" required/> 
                </span>
            </div>
            <div>
                <span class='blocking-span'>
                    <input type="number" class="inputText-developer" placeholder=" OTP*" required/> 
                </span>
            </div>
            <div>
                <button class="signup">SIGN UP</button>
            </div>
           
               
           
        </div>
        )}
}
export default LoginForm