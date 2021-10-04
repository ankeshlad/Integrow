import React from 'react';
import './LoginForm.css';
import message from '../assets/message1.png'
import twitter from '../assets/twitter.png'
import google from '../assets/google.png'
import Toggle from 'react-toggle'


class register extends React.Component{
    constructor(props){
        super(props)
            this.state ={
                cheeseIsReady: false
            }
        }
    
    render(){
        return(
        <div className ="Container2">
            <div>
            <img className = "logo1-message" src = {message}/>
            </div>
            <p className="thankyour"><b>Thank you for your registration!</b></p>
            <p className="tycontent">we're glad you're here!<br /> before you start exploring, we <br /> just sent you the email <br />confirmation.</p>
            <div>
         <button class="resendbtn">Resend Email confirmation</button>
         </div>
        
         
     </div>
        )}
}
export default register