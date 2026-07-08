import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import Warning from '../warning';

const useStyles = makeStyles({
  container: {
    padding: '24px 48px 22px 48px',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    borderTop: 'solid 1px rgba(85, 87, 112, 0.08)',
    whiteSpace: 'nowrap',
  },
  text: {
    color: '#555770',
    fontSize: '14px',
    lineHeight: '22px',
  },
});

const ConfiguracoesText = ({ showAlert }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.text}>
          Utilize as configurações abaixo para ativar ou desativar
          o envio de cobrança por tipo de e-mail ou por produto.
        </div>
        <div className={classes.text}>
          Para pausar o envio para um grupo específico, acesse
          a página de grupos no menu lateral.
        </div>
      </div>
      {
      showAlert
        ? (
          <Warning minWidth="930px">
            A ação de ativar ou desativar o envio de cobrança é válida
            para o envio de e-mails a partir do próximo ciclo de envio de E-Mails.
          </Warning>
        ) : null
      }
    </>
  );
};
ConfiguracoesText.propTypes = {
  showAlert: PropTypes.bool,
};

ConfiguracoesText.defaultProps = {
  showAlert: false,
};
export default ConfiguracoesText;
