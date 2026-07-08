import React from 'react';
import PropTypes from 'prop-types';

import { Edit } from 'react-feather';

import ButtonIcon from 'common/controls/buttonIcon';

const EditButton = ({ onClick }) => (
  <ButtonIcon onClick={onClick}>
    <Edit color="#555770" size="16px" />
  </ButtonIcon>
);

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default EditButton;
