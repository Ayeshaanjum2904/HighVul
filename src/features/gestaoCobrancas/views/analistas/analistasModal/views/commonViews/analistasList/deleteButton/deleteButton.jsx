import React from 'react';
import PropTypes from 'prop-types';

import { X } from 'react-feather';

import ButtonIcon from 'common/controls/buttonIcon';
import { trackedProperties } from 'modules';

const DeleteButton = ({ onClick, isLoading }) => (
  <ButtonIcon
    onClick={onClick}
    isLoading={isLoading}
    mixpanelTarget="Remover analista"
    mixpanelPage={trackedProperties.analistasPage}
  >
    <X color="#555770" size="18px" />
  </ButtonIcon>
);

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default DeleteButton;
