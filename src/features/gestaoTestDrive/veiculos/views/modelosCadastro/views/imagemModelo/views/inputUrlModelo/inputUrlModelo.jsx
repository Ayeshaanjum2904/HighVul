import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import FormatInput from 'common/controls/input/formInput';
import { makeStyles } from '@material-ui/styles';
import UploadCancelButton from 'common/controls/uploadCancelButton/uploadCancelButton';

const useStyles = makeStyles({
  root: {
    '& .MuiInputBase-adornedEnd': {
      background: 'rgba(228, 233, 242, 0.24)',
      border: ' 1px solid #E4E9F2',
    },
  },
});

const InputUrlModelo = ({
  urlModelo, setUrlModelo,
}) => {
  const classes = useStyles();
  return (
    <FormatInput
      type="text"
      label=""
      className={classes.root}
      data-cy="inputUrl"
      placeholder="Se preferir, cole a URL da imagem."
      value={urlModelo}
      setValue={(value) => { setUrlModelo(value); }}
      InputProps={{
        endAdornment: <UploadCancelButton
          disabled={_.isNull(urlModelo)}
          onClick={() => { setUrlModelo(null); }}
        />,
      }}
    />
  );
};

InputUrlModelo.propTypes = {
  urlModelo: PropTypes.any,
  setUrlModelo: PropTypes.func,
};

InputUrlModelo.defaultProps = {
  setUrlModelo: () => {},
  urlModelo: null,
};

export default InputUrlModelo;
