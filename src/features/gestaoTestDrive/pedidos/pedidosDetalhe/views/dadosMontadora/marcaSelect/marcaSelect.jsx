import React from 'react';
import PropTypes from 'prop-types';

import InputAlfanumerico from 'common/controls/inputAlfanumerico';

const MarcaSelect = ({
  marcaMontadora,
}) => (
  <InputAlfanumerico
    label="Marca do regional"
    labelFontSize="11px"
    labelColor="#595669"
    value={marcaMontadora}
    disabled
    showValidation={false}
  />
);

MarcaSelect.propTypes = {
  marcaMontadora: PropTypes.string,
};

MarcaSelect.defaultProps = {
  marcaMontadora: '',
};

export default MarcaSelect;
