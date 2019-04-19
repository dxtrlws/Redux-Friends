import React, { Component } from 'react';
import Login from './components/Login'
import { Route, Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import './App.css';
import FriendList from './components/FriendList';

class App extends Component {
  render() {
    return (
      <Grid container style={{width: '100%', maxWidth: 1000, margin: 'auto'}}>
        <Link to="/login">Login</Link>
        <h1>Hello</h1>
        
        <Route exact path="/login" component={Login}/>
        <Route exact path="/friends" component={FriendList}/>
      </Grid>
    );
  }
}

export default App;
