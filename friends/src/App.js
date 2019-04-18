import React, { Component } from 'react';
import Login from './components/Login'
import { Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/login">Login</Link>
        <h1>Hello</h1>
        
        <Route exact path="/login" component={Login}/>
      </div>
    );
  }
}

export default App;
