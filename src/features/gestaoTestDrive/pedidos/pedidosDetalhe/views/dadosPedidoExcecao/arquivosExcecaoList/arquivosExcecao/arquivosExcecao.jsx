import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import PreviewIcon from 'assets/icons/preview';
import { Mixpanel } from 'modules';

import './arquivosExcecao.scss';

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: 0,
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:disabled': {
      color: 'rgba(0, 0, 0, 0.54)',
    },
  },
}));

const ArquivosExcecao = ({
  disabled, arquivo,
}) => {
  const classes = useStyles();
  return (
    <div className="arquivosExcecao__item__container">
      <div className="arquivosExcecao__item__name">
        {arquivo.nome}
      </div>
      <div className="arquivosExcecao__item__icon">
        <IconButton
          className={classes.button}
          disabled={disabled}
          onClick={() => {
            Mixpanel.trackPreviewFiles('Preview Arquivo TD exceção');
            window.open(arquivo.url);
          }}
          disableRipple
        >
          <PreviewIcon />
        </IconButton>
      </div>
    </div>
  );
};

ArquivosExcecao.propTypes = {
  arquivo: PropTypes.object,
  disabled: PropTypes.bool,
};

ArquivosExcecao.defaultProps = {
  disabled: false,
  arquivo: null,
};

export default ArquivosExcecao;
