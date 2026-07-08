import React from 'react';
import PropTypes from 'prop-types';

import { X } from 'react-feather';

import ButtonIcon from 'common/controls/buttonIcon';

const RemoveButton = ({ onClick }) => (
  <ButtonIcon onClick={onClick}>
    <X color="#555770" size="18px" />
  </ButtonIcon>
);

RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RemoveButton;
