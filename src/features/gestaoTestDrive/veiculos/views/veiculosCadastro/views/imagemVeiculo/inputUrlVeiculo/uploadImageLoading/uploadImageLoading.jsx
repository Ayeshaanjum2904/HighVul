import React from 'react';
import PropTypes from 'prop-types';

import { Loader } from 'react-feather';
import { makeStyles } from '@material-ui/styles';

import './uploadImageLoading.scss';

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

const UploadImageLoading = ({ isLoading, children, urlImagem }) => {
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

  if (urlImagem !== null) {
    return (
      <img className={classes.img} src={urlImagem} alt="Veiculo" />
    );
  }

  return children;
};

UploadImageLoading.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  urlImagem: PropTypes.string,
};

UploadImageLoading.defaultProps = {
  children: null,
  isLoading: false,
  urlImagem: null,
};

export default UploadImageLoading;
