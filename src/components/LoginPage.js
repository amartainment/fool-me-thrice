import React from 'react';
import {authenticate} from '../actions/api.js';
import {withRouter} from 'react-router';

import '../App.css';

class LoginPageComponent extends React.Component {
  constructor() {
      super();
      this.state = {
          email: '',
          password: ''
      };
  }

  handleUsernameChange = (email) => {
      this.setState({...this.state, email: email});
  }

  handlePasswordChange = (password) => {
      this.setState({...this.state, password: password});
  }

  handleSubmit() {
    authenticate(this.state)
        .then(res => {
          if (res.data.topics.length) {
            this.props.history.push('/read');
          } else {
            this.props.history.push('/select');
          }
        });
  }

  render() {
    return (
      <div className="container">
        <div className="login-card">
            <div className="login-card-content">
                <h1 className="app-name">The Daily Fool</h1>
                <div className="login-form">
                    <input className="form-control" onChange={(e) => this.handleUsernameChange(e.target.value)} type="text" placeholder="someone@example.com"></input>
                    <input className="form-control" onChange={(e) => this.handlePasswordChange(e.target.value)} type="password" placeholder="password123"></input>
                </div>
                <div className="mt-4 mb-4 ml-auto mr-auto">
                    <button onClick={() => this.handleSubmit()} className="login-button button btn-primary">Login</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default (withRouter)(LoginPageComponent);