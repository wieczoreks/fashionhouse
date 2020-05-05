import React, {Component} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage'
import {
  Switch,
  Route, Redirect
} from "react-router-dom";
import ShopPage from './pages/shop/shop'
import CheckoutPage from './pages/checkout/checkout'
import Header from './components/header/header'
import SignInUp from './pages/signinup/signinup'
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount(){
 
   const {checkUserSession} = this.props

   checkUserSession()
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
   
    return (
      <div>
      <Header />
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={()=>this.props.currentUser?
            (<Redirect to="/"/>):(<SignInUp />)} />
        </Switch>
      </div>
      );
    }
}

const mapStateToProps = createStructuredSelector ({
    currentUser:selectCurrentUser,  
})

const mapDispatchToProps = (dispatch) =>{
  return {
      checkUserSession:()=>dispatch(checkUserSession()),
      
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
