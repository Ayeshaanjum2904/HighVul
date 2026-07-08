import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup } from 'common/layout/list';
import { makeStyles } from '@material-ui/styles';
import { configUpdateAction } from '../../../../../../redux/enums';

import TemplateRow from '../configuracoesListRow';
import Warning from '../warning';

const useStyles = makeStyles({
  padding: {
    padding: '0 48px',
    background: 'gba(228, 233, 242, 0.24)',
  },
});

const selectText = (action) => {
  switch (action) {
    case configUpdateAction.emailsAlterarTipo:
      return `Envio de cobrança por tipo desativado: todos os envios de cobrança
       de todos os produtos dentro da categoria desativada serão pausados`;
    case configUpdateAction.emailsAlterarProduto:
      return `Envio de cobrança por produto desativado: todos os envios de cobrança
       para este produto serão pausados`;
    default:
      return '';
  }
};

const ConfiguracoesListGroup = ({ grupoConfiguracoes }) => {
  const classes = useStyles();
  if (grupoConfiguracoes?.label) {
    return (
      <ListGroup
        label={grupoConfiguracoes?.label}
        className={classes.padding}
      >
        {
          (grupoConfiguracoes?.configuracoes || []).map((c, i) => (
            <TemplateRow
              configuracao={c}
              action={grupoConfiguracoes?.action}
              mixpanelTarget={grupoConfiguracoes?.mixpanelTarget}
              index={i}
              key={i}
            />
          ))
        }
        {grupoConfiguracoes?.isDisabled
          ? (
            <Warning>
              {selectText(grupoConfiguracoes?.action)}
            </Warning>
          ) : null}
      </ListGroup>
    );
  }
  return null;
};

ConfiguracoesListGroup.propTypes = {
  grupoConfiguracoes: PropTypes.object.isRequired,
};

export default ConfiguracoesListGroup;
