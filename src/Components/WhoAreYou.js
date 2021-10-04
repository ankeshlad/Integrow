import React from 'react';
import './LoginForm.css';
import facebook from '../assets/development-1.png'
import developer from '../assets/developer.png'
import serviceprovider from '../assets/ServiceProvider.png'


class whoAreYou extends React.Component{
    constructor(props){
        super(props)
            this.state ={
                cheeseIsReady: false
            }
        }
    
    render(){
        return(
        <div className ="Container1">
            <p className="text-wru" style={{}}><b>Who Are You ?</b></p>
            <div className="icon">
            <div className = "logoContainer1">
                <img className = "logo1" src = {facebook}/>
                <p className="text-investor">Investor</p>
            </div>
            <div  className = "logoContainer1">
                <img className = "logo1" src = {developer}/></div>
                <p className="text-developer">Developer</p>
            <div  className = "logoContainer1">
                <img className = "logo1" src = {serviceprovider}/>
                <p className="text-serviceprovider">Service <br /> Provider</p>
            </div>
            </div>
        </div>
        )}
}
export default whoAreYou