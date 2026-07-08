import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import TemplateGroup from './configuracoesListGroup';
import ConfiguracoesText from './configuracoesText';

import './emailsConfiguracoesList.scss';

const EmailsConfiguracoesList = ({
  gruposConfiguracoes,
}) => (
  !_.isEmpty(gruposConfiguracoes) ? (
    <div className="emails__configuracoes-list__container">
      <ConfiguracoesText />
      {(Array.isArray(gruposConfiguracoes) ? gruposConfiguracoes : []).map((gc, i) => (
        <TemplateGroup grupoConfiguracoes={gc} key={i} />
      ))}
    </div>
  ) : null
);

EmailsConfiguracoesList.propTypes = {
  gruposConfiguracoes: PropTypes.array,
};

EmailsConfiguracoesList.defaultProps = {
  gruposConfiguracoes: null,
};

export default EmailsConfiguracoesList;
