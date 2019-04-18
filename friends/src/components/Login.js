import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { TextField, Button, Grid } from '@material-ui/core';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(credentials)
    .then(this.props.history.push('/'));
    this.setState({
        username: '',
        password:''
    })
  };
  render() {
    console.log(this.props);
    return (
      <Grid container justify='center'>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label='Name'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            margin='normal'
            type='text'
          />
          <TextField
            label='Password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            margin='normal'
            type='password'
          />
          <Button onClick={this.handleSubmit}>Submit</Button>
        </form>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    logginIn: state.logginIn
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
