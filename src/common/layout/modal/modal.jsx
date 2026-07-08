import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import CloseModalButton from './closeModalButton';

import './modal.scss';

const useStyles = makeStyles({
  container: {
    width: (props) => props.width ?? '85vw',
    height: (props) => props.height ?? '85vh',
  },
});

const Modal = ({
  children, disableCloseButton, closeModal, width, height, color,
}) => {
  const classes = useStyles({ width, height });
  return (
    <div className="common__modal__overlay">
      <div className={`common__modal__container ${classes.container}`}>
        <div className="common__modal__close">
          <CloseModalButton disabled={disableCloseButton} onClick={closeModal} color={color} />
        </div>
        <div className="common__modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  disableCloseButton: PropTypes.bool,
  closeModal: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
};

Modal.defaultProps = {
  children: null,
  color: null,
  disableCloseButton: false,
  closeModal: () => {},
  width: null,
  height: null,
};

export default Modal;
