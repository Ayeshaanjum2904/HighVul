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
      border: '1px solid #E4E9F2',
      height: '40px',
    },
  },
});

const InputUrlVeiculo = ({
  urlVeiculo, setUrlVeiculo,
}) => {
  const classes = useStyles();
  return (
    <FormatInput
      type="text"
      label=""
      className={classes.root}
      data-cy="inputUrlVeiculos"
      placeholder="Se preferir, cole a URL da imagem."
      value={urlVeiculo}
      setValue={(value) => { setUrlVeiculo(value); }}
      InputProps={{
        endAdornment: <UploadCancelButton
          disabled={_.isNull(urlVeiculo)}
          onClick={() => { setUrlVeiculo(null); }}
        />,
      }}
    />
  );
};

InputUrlVeiculo.propTypes = {
  urlVeiculo: PropTypes.any,
  setUrlVeiculo: PropTypes.func,
};

InputUrlVeiculo.defaultProps = {
  setUrlVeiculo: () => {},
  urlVeiculo: null,
};

export default InputUrlVeiculo;
