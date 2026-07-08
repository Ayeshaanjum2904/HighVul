import React from 'react';
import PropTypes from 'prop-types';

import { Loader } from 'react-feather';
import { makeStyles } from '@material-ui/styles';

import './uploadImageLoading.scss';
import { validateUrl } from 'utils/validate';

const useStyles = makeStyles({
  loading: {
    animation: 'spin 2s linear infinite',
  },
  loadingText: {
    fontSize: '12px',
    color: '#8F9BB3',
    marginTop: '11px',
  },
  img: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
});

const UploadImageLoading = ({
  isLoading, children, urlModelo,
}) => {
  const classes = useStyles();

  if (isLoading) {
    return (
      <>
        <Loader className={classes.loading} color="#555770" />
        <div className={classes.loadingText}>
          Carregando
        </div>
      </>
    );
  }

  if (validateUrl(urlModelo)) {
    return (
      <img className={classes.img} src={urlModelo} alt="Veiculo" />
    );
  }

  return children;
};

UploadImageLoading.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  urlModelo: PropTypes.string,
};

UploadImageLoading.defaultProps = {
  children: null,
  isLoading: false,
  urlModelo: null,
};

export default UploadImageLoading;
