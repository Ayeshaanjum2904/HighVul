import React from 'react';
import PropTypes from 'prop-types';
import HeaderTaxa from './headerTaxa';
import ButtonsTaxa from './buttonsTaxa';

import './formTaxa.scss';
import TableTaxa from './table';

const FormTaxa = ({
  disable, showDeleteButton, taxa,
}) => (
  <div className="container-cadastro-taxa">
    <HeaderTaxa taxa={taxa} disabled={disable} />
    <TableTaxa disabled={disable} showDeleteButton={showDeleteButton} taxa={taxa} />
    { (disable === false && showDeleteButton === false) ? (<ButtonsTaxa />) : null}
  </div>
);
FormTaxa.propTypes = {
  showDeleteButton: PropTypes.bool,
  disable: PropTypes.bool,
  taxa: PropTypes.object,
};

FormTaxa.defaultProps = {
  showDeleteButton: false,
  disable: false,
  taxa: {},
};

export default FormTaxa;
