import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUpForm from './components/signUpForm';
import Choices from './components/Choices';
import ChooseSpot from './components/ChooseSpot';
import NoMatch from './components/NoMatch';
import Layout from './components/layout';
import Parking from './Parking.js';

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <Layout>
        <Router>
          <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/SignUpForm" component={SignUpForm} />
          <Route path="/Choices" component={Choices} />
          <Route path="/ChooseSpot" component={ChooseSpot} />
          <Route path="/Parking" component={Parking} />
          <Route componont= {NoMatch} />
          </Switch>
        </Router>
        </Layout>
      </React.Fragment>
    );
  }
}
export default App;