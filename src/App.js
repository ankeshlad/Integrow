import React from 'react'
import Login from '../src/Components/Login'
import LoginForm from '../src/Components/LoginForm'
import Register from '../src/Components/RegisterLogin'
import WhoAreYou from '../src/Components/WhoAreYouForm';
import Developer from '../src/Components/Developer';
import ThankYou from '../src/Components/ThankYouForm';
import DeveloperMainPage from './Components/DeveloperMainPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Login />} />
          <Route path="/Register.js" exact component={() => <Register />} />
        </Switch>
      </Router>
      {/* <WhoAreYou /> */}
      {/* <Developer /> */}
      {/* <ThankYou /> */}
      {/* <DeveloperMainPage /> */}
    </div>
    )
  }
}
export default App;