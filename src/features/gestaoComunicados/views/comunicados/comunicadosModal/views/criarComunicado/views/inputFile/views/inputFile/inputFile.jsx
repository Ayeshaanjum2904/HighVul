import React from 'react';
import PropTypes from 'prop-types';

import FormatInput from 'common/controls/input/formInput';
import { makeStyles } from '@material-ui/core/styles';
import colors from 'assets/styles/colors';
import EndAdornment from './endAdornment';

const useStyles = makeStyles(() => ({
  input: {
    '&::placeholder': {
      opacity: 1,
    },
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    cursor: 'default',
  },
  root: {
    height: '40px',
    backgroundColor: `${colors.input_background} !important`,
    caretColor: `${colors.input_background} !important`,
    width: '716px',
  },
  container: {
    marginTop: '1px',
    minWidth: 200,
  },
}));

const InputFile = ({
  urlFile, fileName,
}) => {
  const classes = useStyles();
  return (
    <FormatInput
      type="text"
      label="Anexar arquivo*:"
      placeholder="Selecione um arquivo"
      value={urlFile ? fileName : null}
      disabled={false}
      InputProps={{
        endAdornment: <EndAdornment />,
        classes: { input: classes.input, root: classes.root },
      }}
    />
  );
};

InputFile.propTypes = {
  urlFile: PropTypes.string,
  fileName: PropTypes.string,
};

InputFile.defaultProps = {
  urlFile: null,
  fileName: '',
};

export default InputFile;
