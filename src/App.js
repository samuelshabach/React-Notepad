import React , { Component } from 'react';

import './App.css';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/SignInAndSignUp/sign-in-and-sign-up';
import AddNotesPage from './pages/AddNotesPage/add-notes-page'
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      createUserProfileDocument(user);
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

    render() {
      return (
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route path='/signin' component={SignInAndSignUpPage} />
            <Route path='/addnotes' component={AddNotesPage} />
          </Switch>
        </div>
      )
    }
  }



export default App;
