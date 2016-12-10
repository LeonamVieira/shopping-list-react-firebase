import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import '../styles/form.css';

class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderAuthenticationError = this.renderAuthenticationError.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = this.refs.email.value.trim();
    const password = this.refs.password.value.trim();
    this.props.signInUser({
      email,
      password
    });

  }

  renderAuthenticationError() {
    const { authenticationError } = this.props;
    if (authenticationError) {
      return (
        <div className="alert alert-error">
          {authenticationError}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="main-content">
        <div className="grid grid-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Login</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12 columns">
              <div className="login-form-container">
                { this.renderAuthenticationError() }
                <form onSubmit={this.handleSubmit}>
                  <label>
                    <span>Email</span>
                    <input type="email" ref="email" className="form-input" required />
                  </label>

                  <label>
                    <span>Password</span>
                    <input type="password" ref="password" className="form-input" required />
                  </label>
                  <div className="text-center">
                    <button className="btn">Entrar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticationError: state.auth.error
  }
}

export default connect(mapStateToProps, Actions)(Login);
