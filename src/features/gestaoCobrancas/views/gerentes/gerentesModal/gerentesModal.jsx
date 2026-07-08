import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../../../redux/enums';

import ModalUpdateRegional from './views/updateRegional';
import ModalInsertRegional from './views/insertRegional';

const GerentesModal = ({ modal }) => (
  modal === Modal.updateGerente
    ? <ModalUpdateRegional />
    : <ModalInsertRegional />
);

GerentesModal.propTypes = {
  modal: PropTypes.string.isRequired,
};

export default GerentesModal;
