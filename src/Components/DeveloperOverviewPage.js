import React from 'react';
import './DeveloperPage.css';
import logo from '../assets/bg-1.png'
import suitcase from '../assets/suitcase.png'
import questionmark from '../assets/question-mark.png'
import bellring from '../assets/bell-ring.png'

class DeveloperOverviewPage extends React.Component{
    constructor(props){
        super(props)
            this.state ={
                cheeseIsReady: false
            }
        }
    render(){
        return(
        <div className ="Container10">
            <div className="Row10">
                <div className = "logoContainer10">
                    <img className = "logo10" src = {logo}/>
                </div>
                <div className="headName">
                    <img className="logo11" src={suitcase} />
                    <a href="#" class="button">Projects</a>
                    <img className="logo11" src={questionmark} />
                    <a href="#" class="button">Query</a>
                    <img className="logo11" src={bellring} />
                    <a href="#" class="button">Notification</a>
                </div>
                <div className="headName1">
                    <a href="#" class="button1">My Profile</a>
                </div>
            
            </div>
                <div className="headName1">
                    <a href="#" class="button1">My Profile</a>
                
                </div>
            
            
        </div>
        )}
}
export default DeveloperOverviewPage