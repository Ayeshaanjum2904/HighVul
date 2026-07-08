import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../../../redux/enums';

import ModalUpdateRegional from './views/updateRegional';
import ModalInsertRegional from './views/insertRegional';

const AnalistasModal = ({ modal }) => (
  modal === Modal.updateAnalista
    ? <ModalUpdateRegional />
    : <ModalInsertRegional />
);

AnalistasModal.propTypes = {
  modal: PropTypes.string.isRequired,
};

export default AnalistasModal;
