import React from 'react';
import PropTypes from 'prop-types';

import { safeConcat } from 'utils/format';

import './configuracoesListRow.scss';
import { makeStyles } from '@material-ui/core';
import { trackedProperties } from 'modules';
import { CustomSwitch } from 'common/controls/customSwitch/customSwitch.styled';

const useStyles = makeStyles({
  line: {
    height: '1px',
    borderTop: 'solid 1px rgba(85, 87, 112, 0.08)',
    margin: '0 48px',
  },
});

const ConfiguracoesListRow = ({
  configuracao, updateConfig, index, action, updateConfigList,
  mixpanelTarget,
}) => {
  const classes = useStyles();
  return (
    <>
      {index !== 0 ? <div className={classes.line} /> : null}
      <div className="emails__configuracoes__list-row__container">
        <div className="emails__configuracoes__list-row__item emails__configuracoes__list-row__descricao">
          {safeConcat('Cobrança ', configuracao?.descricao)}
        </div>
        <div className="emails__configuracoes__list-row__item emails__configuracoes__list-row__status">
          <CustomSwitch
            mixpanelPage={trackedProperties.emailsPage}
            mixpanelTarget={mixpanelTarget}
            onClick={() => updateConfig(action, configuracao)}
            checked={configuracao?.status}
            isLoading={updateConfigList.some((i) => i.action === action
                                                 && i.id === configuracao.id)}
          />
        </div>
      </div>
    </>
  );
};

ConfiguracoesListRow.propTypes = {
  configuracao: PropTypes.object,
  updateConfig: PropTypes.func,
  index: PropTypes.number,
  action: PropTypes.string,
  updateConfigList: PropTypes.array,
  mixpanelTarget: PropTypes.string.isRequired,
};

ConfiguracoesListRow.defaultProps = {
  configuracao: null,
  updateConfig: () => {},
  index: null,
  action: null,
  updateConfigList: [],
};

export default ConfiguracoesListRow;
