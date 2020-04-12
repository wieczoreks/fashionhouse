import React, {Component} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage'
import {
  Switch,
  Route,
} from "react-router-dom";
import ShopPage from './pages/shop/shop'
import Header from './components/header/header'
import SignInUp from './pages/signinup/signinup'
import { auth } from './firebase/firebase.utils.js'


class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({currentUser:user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    const {currentUser} = this.state
    return (
      <div>
      <Header currentUser={currentUser} />
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInUp} />
        </Switch>
      </div>
      );
    }
}
export default App;
