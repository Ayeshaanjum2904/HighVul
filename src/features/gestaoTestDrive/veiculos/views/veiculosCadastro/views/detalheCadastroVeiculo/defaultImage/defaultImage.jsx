import { makeStyles } from '@material-ui/styles';
import React from 'react';

import { Image } from 'react-feather';

const useStlyes = makeStyles({
  container: {
    width: '184px',
    height: '184px',
    border: '2px dashed #e4e9f2',
    borderRadius: '69px',
    fontSize: '12px',
    background: '#FAFBFD',
    color: '#8F9BB3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  icon: {
    color: '#555770',
    marginBottom: '12px',
  },
});

const DefaultImage = () => {
  const classes = useStlyes();
  return (
    <div className={classes.container}>
      <Image className={classes.icon} size={20} />
      Insira sua imagem ao lado
    </div>
  );
};

DefaultImage.propTypes = {

};

export default DefaultImage;
