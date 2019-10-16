import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUpForm from './components/signUpForm';
import ButtonsPage from './components/ButtonsPage';
import Choices from './components/Choices';
import ChooseSpot from './components/ChooseSpot';
import NoMatch from './components/NoMatch';
import Layout from './components/layout';


class App extends Component{
  render(){
    return (
      <React.Fragment>
        <Layout>
        <Router>
          <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/SignUpForm" component={SignUpForm} />
          <Route path="/ButtonsPage" component={ButtonsPage}/>
          <Route path="/Choices" component={Choices} />
          <Route path="/ChooseSpot" component={ChooseSpot} />
          <Route componont= {NoMatch} />
          </Switch>
        </Router>
        </Layout>
      </React.Fragment>
    );
  }
}
export default App;
