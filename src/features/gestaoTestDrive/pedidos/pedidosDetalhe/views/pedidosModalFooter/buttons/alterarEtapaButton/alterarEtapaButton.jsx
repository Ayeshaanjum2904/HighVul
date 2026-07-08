import React from 'react';
import PropTypes from 'prop-types';
import Button from 'common/controls/button';

const AlterarEtapaButton = ({ setOpenModalAlterar }) => (
  <Button
    onClick={() => setOpenModalAlterar(true)}
    color="dark_gray_border"
  >
    Alterar etapa
  </Button>
);

AlterarEtapaButton.propTypes = {
  setOpenModalAlterar: PropTypes.func,
};

AlterarEtapaButton.defaultProps = {
  setOpenModalAlterar: () => {},
};
export default AlterarEtapaButton;
