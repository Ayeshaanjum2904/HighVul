import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Eye, EyeOff } from 'react-feather';
import CommonButton from 'common/controls/buttonIcon';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import './userEntry.scss';

import { textField as styles } from 'common/controls/input/inputStyles';
import AttentionMessage from 'common/layout/attentionMessage';
import colors from 'assets/styles/colors';
import { styled } from '@material-ui/styles';
import { TextField } from '@mui/material';
import LoginIcon from '../../../../assets/icons/login-icon.svg';

const StyledTextField = styled(TextField)((props) => ({
  ...styles(props).root,
  '& .Mui-focused': {
    border: '1px solid #555770',
  },
  '& input[type="password"]::-ms-reveal': {
    display: 'none',
  },
  '& .Mui-error': {
    border: `1px solid ${colors.error_color_400}`,
  },
}));

function UserEntry({
  username, password, onClick, onChange, isLoginError, loginLoading, errorMessage,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const linkFirstAccess = `${window.env.REACT_APP_SECURITY_LINK}%2Flogin&title=FCA%20Security&type=GET&route=remember-password`;

  const loadingButton = (isLoading) => {
    if (!isLoading) {
      return (
        <div className="text-button">
          Acessar STAFF
          <img src={LoginIcon} style={{ color: '#FFFFFF', marginLeft: '10px' }} alt="icon" />
        </div>
      );
    }
    return (
      <CircularProgress
        className="buttonProgress"
        size={24}
        color="#FFFFFF"
      />
    );
  };
  const linkSecurity = window.env.REACT_APP_SECURITY_LINK;
  const linkForgetPassword = `${linkSecurity}%2Flogin&title=FCA%20Security&type=GET&route=remember-password`;

  const showLoginError = (error) => {
    if (!error) return null;
    return (
      <div className="loginErrorDiv">
        <span id="loginErrorMessage">
          Login inválido
        </span>
      </div>
    );
  };

  const showSpecialLoginError = (error, message) => {
    if (error && message.toLowerCase() !== 'login inválido') {
      return (
        <AttentionMessage
          mensagem={message}
        />
      );
    }
    return null;
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (

    <div className="login-box">
      <h2 className="login-titulo">Seja bem-vindo!</h2>
      <div className="login-entry">
        {showSpecialLoginError(isLoginError, errorMessage)}
        <div className="login-label">
          <p className="user-label">
            Usuário
          </p>
        </div>
        <div className="input-text">
          <StyledTextField
            variant="standard"
            autoComplete="username"
            placeholder="Seu usuário"
            error={!!isLoginError}
            style={{
              height: '50px',
              width: '330px',
              marginBottom: '5px',
              verticalAlign: 'bottom',
              marginTop: '-19px',
            }}
            InputProps={{
              style: {
                color: '#000000',
                fontSize: '16px',
              },
              disableUnderline: true,
            }}
            value={username}
            onChange={(event) => {
              onChange(event.target.value, 'email');
            }}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                onClick();
              }
            }}
          />
        </div>

      </div>
      <div className="login-entry">
        <div className="login-label">
          <p className="password-label">
            Senha
          </p>
        </div>
        <div className="input-text">
          <StyledTextField
            variant="standard"
            autoComplete="current-password"
            placeholder="Sua senha"
            error={!!isLoginError}
            style={{
              height: '50px',
              width: '330px',
              marginBottom: '5px',
              verticalAlign: 'bottom',
              marginTop: '-19px',
            }}
            InputProps={{
              style: {
                color: '#000000',
                fontSize: '16px',
              },
              endAdornment: (
                <CommonButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <EyeOff size={24} color="#555770" /> : <Eye size={24} color="#555770" />}
                </CommonButton>),
            }}
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(event) => {
              onChange(event.target.value, 'password');
            }}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                onClick();
              }
            }}
          />
          {showLoginError(isLoginError)}
        </div>
      </div>
      <div className="loginButtonDiv">
        <Button
          className="button"
          style={{
            height: '40px',
            width: '330px',
            borderRadius: '3px',
            backgroundColor: `${colors.secundary_color_700}`,
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            textTransform: 'capitalize',
          }}
          disabled={loginLoading}
          onClick={onClick}
        >
          {loadingButton(loginLoading)}
        </Button>
      </div>
      <div className="forget-pass-container">
        <a tabIndex="-1" href={linkForgetPassword}>
          <span className="forget-your-pass-label"> Esqueci minha senha </span>
        </a>
      </div>
      <div className="login-divider">
        <Divider variant="fullWidth" />
      </div>
      <div className="first-access-container">
        <span className="first-access-label">Ainda não tem uma conta?</span>
        <a href={linkFirstAccess}>
          <button type="submit" className="first-access-button">
            <span className="first-access-button-label">
              Primeiro Acesso
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}

UserEntry.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isLoginError: PropTypes.bool.isRequired,
  loginLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default UserEntry;
