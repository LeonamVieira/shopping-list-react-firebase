import React from 'react';
import { connect } from 'react-redux';
import { Auth as Actions }  from '../actions';

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
        <div className="callout alert">
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
        <div className="row">
          <div className="small-12 columns text-center">
            <h3>Login</h3>
          </div>
        </div>

        <div className="row">
          <div className="small-12 columns">
            <div className="login-form-container">

              { this.renderAuthenticationError() }

              <form onSubmit={this.handleSubmit}>
                <label>
                  Email
                  <input type="email" ref="email" required />
                </label>

                <label>
                  Password
                  <input type="password" ref="password" required />
                </label>
                <div className="text-center">
                  <button className="button">Entrar</button>
                </div>
              </form>
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
