import React, { Component } from 'react'
import './default.css'
import bg2 from '../assets/bg-1.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import work from '../assets/work.png'
export default class DeveloperOverviewPage extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="subContainer">
                    <div className="logoContainer">
                        <img src={bg2} />
                    </div>
                    <div className="menuItemContainer">
                        <a className = "menuItem">
                            <div style = {{display: 'flex', alignItems: 'center'}}>
                                <div>
                                <img src={work} />
                                </div>
                                <div>
                                <h5>Projects</h5>
                                </div>
                            </div>
                        </a>
                        <a className = "menuItem">
                            <div style = {{display: 'flex', alignItems: 'center'}}>
                                <div>
                                <img src={work} />
                                </div>
                                <div>
                                <h5>Projects</h5>
                                </div>
                            </div>
                        </a>
                        <a className = "menuItem">
                            <div style = {{display: 'flex', alignItems: 'center'}}>
                                <div>
                                <img src={work} />
                                </div>
                                <div>
                                <h5>Projects</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
