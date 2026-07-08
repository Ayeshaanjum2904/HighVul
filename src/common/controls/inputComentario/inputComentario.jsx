import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormatInput from 'common/controls/input/formInput/formInput';
import ButtonIcon from 'common/controls/buttonIcon';
import SendIcon from '@material-ui/icons/Send';
import { Mixpanel } from 'modules';

import _ from 'lodash';

const useStyles = makeStyles(() => ({
  loading: {
    marginTop: 3,
  },
  root: {
    backgroundColor: 'transparent !important',
  },
}));

const SendButton = ({
  // eslint-disable-next-line react/prop-types
  disabled, onClick, isLoading,
}) => {
  const classes = useStyles();
  return (
    <ButtonIcon
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading
        ? <CircularProgress className={classes.loading} color="inherit" size="18px" />
        : <SendIcon style={{ color: '#8f9bb3' }} />}
    </ButtonIcon>

  );
};

const InputComentario = ({
  value, setValue,
  sendComentario, isLoading, isLoadingModal, placeholder, mixpanelPage,
}) => {
  const classes = useStyles();
  return (
    <FormatInput
      type="text"
      value={value}
      disabled={isLoadingModal}
      setValue={(v) => setValue(v)}
      placeholder={placeholder}
      onKeyPress={(e) => {
        if (e.key === 'Enter' && value) {
          Mixpanel.trackCommentary(mixpanelPage);
          sendComentario(value);
        }
      }}
      InputProps={{
        endAdornment: <SendButton
          disabled={_.isNull(value) || isLoadingModal}
          isLoading={isLoading}
          onClick={() => {
            Mixpanel.trackCommentary(mixpanelPage);
            sendComentario(value);
          }}
        />,
        classes: { root: classes.root },
      }}
    />
  );
};

InputComentario.propTypes = {
  setValue: PropTypes.func,
  value: PropTypes.string,
  sendComentario: PropTypes.func,
  isLoading: PropTypes.bool,
  isLoadingModal: PropTypes.bool,
  placeholder: PropTypes.string,
  mixpanelPage: PropTypes.string.isRequired,
};

InputComentario.defaultProps = {
  setValue: () => {},
  value: null,
  sendComentario: () => {},
  isLoading: false,
  isLoadingModal: false,
  placeholder: 'Escreva aqui seu comentário',
};

export default InputComentario;
