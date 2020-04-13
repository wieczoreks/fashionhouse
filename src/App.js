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
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'
import { connect } from "react-redux";
import {setCurrentUser} from './redux/user/user.actions'

class App extends Component {


  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const  userRef = await createUserProfileDocument(userAuth, null)
        userRef.onSnapshot(snapshot=>{
          this.props.setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        this.props.setCurrentUser(userAuth)
      }
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    // const {currentUser} = this.state
    return (
      <div>
      <Header />
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInUp} />
        </Switch>
      </div>
      );
    }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    setCurrentUser:(user) => dispatch(setCurrentUser(user))}
}


export default connect(null, mapDispatchToProps)(App);
