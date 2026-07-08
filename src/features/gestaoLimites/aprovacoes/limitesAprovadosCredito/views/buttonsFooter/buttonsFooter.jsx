import { React } from 'react';
import { useHistory } from 'react-router-dom';
import NewButton from 'common/controls/newButton/newButton';
import PropTypes from 'prop-types';
import { hasPermission } from 'modules/auth/authLogic';
import { permissions } from 'modules/auth';
import { ButtonsFooterCreditoStyle } from './buttonsFooter.style';

const ButtonsFooterCredito = ({
  idLimite, enviarProposta, user,
}) => {
  const history = useHistory();
  const redirectToLimitesAprovados = () => {
    history.replace('/limites/aprovacoes/limites-aprovados');
  };

  const buttonAction = () => {
    if (hasPermission(user, permissions.limitesAprovados.gestaoCredito)) {
      return enviarProposta(idLimite, 'obs_do_credito', redirectToLimitesAprovados);
    }
    return enviarProposta(idLimite, 'enviado_para_credito', redirectToLimitesAprovados);
  };

  const renderName = () => {
    if (hasPermission(user, permissions.limitesAprovados.gestaoCredito)) {
      return 'Enviar para financiamento rede';
    }
    return 'Enviar para crédito';
  };

  return (
    <ButtonsFooterCreditoStyle>
      <NewButton
        className="dark_gray_border"
        onClick={redirectToLimitesAprovados}
      >
        <span>Cancelar</span>
      </NewButton>
      <NewButton
        className="dark_green"
        onClick={buttonAction}
      >
        <span>{renderName()}</span>
      </NewButton>
    </ButtonsFooterCreditoStyle>
  );
};

ButtonsFooterCredito.propTypes = {
  idLimite: PropTypes.number.isRequired,
  enviarProposta: PropTypes.func,
  user: PropTypes.object.isRequired,
};

ButtonsFooterCredito.defaultProps = {
  enviarProposta: () => {},
};

export default ButtonsFooterCredito;
