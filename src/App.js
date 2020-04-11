import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage'
import {
  Switch,
  Route,
} from "react-router-dom";


export class Dupa extends Component {
  render() {
    return (
      <div>
        DUPA
      </div>
    )
  }
}

export class Pipa extends Component {
  constructor(props){
    super(props)

    this.state={
      flag:true
    }
  }
  render() {
    console.log(this.props)
    return (
      <div>
        PIPA {this.props.title}
      </div>
    )
  }
}




function App() {
  return (
    <div>
    <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
