import React from 'react';
import PropTypes from 'prop-types';

import ButtonTooltipIcon from 'common/controls/buttonTooltipIcon';
import { camelFormat } from 'utils/format';
import { trackedProperties } from 'modules';
import { makeStyles } from '@material-ui/core/styles';
import EditarIcon from 'assets/icons/editar';

import './templateListRow.scss';

const useStyles = makeStyles(() => ({
  button: {
    marginTop: '10px',
  },
}));

const TemplateListRow = ({
  template, openModal, label,
}) => {
  const classes = useStyles();
  return (
    <div className="emails__template__list-row__container">
      <div className="emails__template__list-row__item emails__template__list-row__assunto">
        {template?.assuntoEmail}
      </div>
      <div className="emails__template__list-row__item emails__template__list-row__ordem-envio">
        {template?.ordemEnvio}
      </div>
      <div className="emails__template__list-row__item emails__template__list-row__editar">
        <ButtonTooltipIcon
          title="Editar"
          className={classes.button}
          buttonAction={() => openModal(template)}
          mixpanelPage={trackedProperties.emailsPage}
          mixpanelTarget={`Editar Template ${camelFormat(label)}`}
        >
          <EditarIcon />
        </ButtonTooltipIcon>
      </div>
    </div>
  );
};

TemplateListRow.propTypes = {
  template: PropTypes.object,
  openModal: PropTypes.func,
  label: PropTypes.string,
};

TemplateListRow.defaultProps = {
  template: null,
  openModal: () => {},
  label: null,
};

export default TemplateListRow;
