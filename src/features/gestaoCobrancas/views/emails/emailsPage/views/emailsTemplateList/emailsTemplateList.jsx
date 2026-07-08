import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import TemplateHeader from './templateListHeader';
import TemplateGroup from './templateListGroup';

import './emailsTemplateList.scss';

const EmailsTemplateList = ({
  gruposTemplates,
}) => (
  !_.isEmpty(gruposTemplates) ? (
    <div className="emails__template-list__container">
      <div className="emails__template-list__header">
        <TemplateHeader />
      </div>
      {(Array.isArray(gruposTemplates) ? gruposTemplates : []).map((gt, i) => (
        <TemplateGroup grupoTemplates={gt} key={i} />
      ))}
    </div>
  ) : null
);

EmailsTemplateList.propTypes = {
  gruposTemplates: PropTypes.array,
};

EmailsTemplateList.defaultProps = {
  gruposTemplates: null,
};

export default EmailsTemplateList;
