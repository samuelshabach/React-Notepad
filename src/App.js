import React , { Component } from 'react';

import './App.css';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/SignInAndSignUp/sign-in-and-sign-up'
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';


class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

    render() {
      return (
        <div>
          <Header />
          <Switch>
            <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
        </div>
      )
    }
  }



export default App;
