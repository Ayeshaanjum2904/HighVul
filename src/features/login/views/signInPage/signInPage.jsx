import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LogoStellantisBanco from 'assets/icons/iconesRebranding/logo-stellantis-banco';
import UserEntry from '../userEntry';

import './signIn.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    const { sessionExpired, invalidateSession } = this.props;
    if (sessionExpired) {
      invalidateSession();
    }
  }

  submit = async () => {
    const { email, password } = this.state;
    const { login } = this.props;
    await login(email, password);
  };

  handleChange = (value, id) => {
    this.setState({ [id]: value });
  };

  render() {
    const { email, password } = this.state;
    const { isLoginError, loginLoading, errorMessage } = this.props;
    return (
      <div className="login-component">
        <div className="entry-background">
          <UserEntry
            username={email}
            password={password}
            onClick={this.submit}
            isLoginError={isLoginError}
            loginLoading={loginLoading}
            onChange={this.handleChange}
            className="user-entry"
            errorMessage={errorMessage}
          />

        </div>
        <div className="login-text">
          <div className="title-box">
            <div id="fcaIconEasy">
              <LogoStellantisBanco className="feather-logo" alt="Banco Stellantis Logo" />
            </div>
            <div className="loginSubtitle">
              <p className="font-head-2">SISTEMA STAFF</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  isLoginError: PropTypes.bool.isRequired,
  loginLoading: PropTypes.bool.isRequired,
  sessionExpired: PropTypes.bool.isRequired,
  invalidateSession: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default SignIn;
