import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup } from 'common/layout/list';
import { makeStyles } from '@material-ui/styles';
import TemplateRow from '../templateListRow';

const useStyles = makeStyles({
  padding: {
    padding: '0 48px',
    background: 'gba(228, 233, 242, 0.24)',
  },
});

const TemplatesListGroup = ({ grupoTemplates }) => {
  const classes = useStyles();
  if (grupoTemplates?.label) {
    return (
      <ListGroup
        label={grupoTemplates?.label}
        className={classes.padding}
      >
        {
          (grupoTemplates?.templates || []).map((t, i) => (
            <TemplateRow
              label={grupoTemplates?.label}
              template={t}
              key={i}
            />
          ))
        }
      </ListGroup>
    );
  }
  return null;
};

TemplatesListGroup.propTypes = {
  grupoTemplates: PropTypes.object.isRequired,
};

export default TemplatesListGroup;
