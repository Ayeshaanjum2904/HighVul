import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ButtonIcon from 'common/controls/buttonIcon';
import VoltarIcon from '@material-ui/icons/ArrowBack';

const ButtonBack = ({ isNeedOpenModal, setModalOpen }) => {
  const history = useHistory();
  const actions = () => {
    if (isNeedOpenModal) {
      setModalOpen();
    } else {
      history.replace('/testdrive/taxas/historico');
    }
  };
  return (
    <div className="cadastro-taxas__content__buttonBack">
      <ButtonIcon
        onClick={actions}
      >
        <VoltarIcon />
      </ButtonIcon>
    </div>
  );
};

ButtonBack.propTypes = {
  setModalOpen: PropTypes.func,
  isNeedOpenModal: PropTypes.bool,
};

ButtonBack.defaultProps = {
  setModalOpen: () => {},
  isNeedOpenModal: false,
};

export default ButtonBack;
