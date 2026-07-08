import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonIcon from 'common/controls/buttonIcon';
import VoltarIcon from '@material-ui/icons/ArrowBack';
import PropTypes from 'prop-types';

const ButtonBack = ({
  cadastroPage,
}) => {
  const history = useHistory();
  const actions = () => {
    cadastroPage(false);
    history.replace('/limites/aprovacoes/limites-aprovados');
  };
  return (
    <div className="cadastro-taxas__content__buttonBack">
      <ButtonIcon onClick={actions}>
        <VoltarIcon />
      </ButtonIcon>
    </div>
  );
};

ButtonBack.propTypes = {
  cadastroPage: PropTypes.func,
};

ButtonBack.defaultProps = {
  cadastroPage: () => {},
};

export default ButtonBack;
