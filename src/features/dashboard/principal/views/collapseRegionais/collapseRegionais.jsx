import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { trackedProperties } from 'modules';

import Collapse from 'common/layout/collapse';
import { makeStyles } from '@material-ui/styles';
import PedidosRegiao from './views/pedidosRegiao';
import ModalidadeRegiao from './views/modalidadeRegiao';
import CreditoRegiao from './views/creditoRegiao';
import ModeloRegiao from './views/modeloRegiao';

import './collapseRegionais.scss';

const useStyles = makeStyles({
  grid: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    justifyContent: 'space-between',
    paddingRight: '16px',
    marginBottom: '25px',
  },
});

const CollapseRegionais = ({
  disabled, subtitle, isCollapseOpen, setCollapseOpen,
}) => {
  const classes = useStyles({ disabled, isCollapseOpen });

  useEffect(() => {
    if (disabled)setCollapseOpen(false);
  }, [disabled, setCollapseOpen]);

  return (
    <Collapse
      isOpen={isCollapseOpen && !disabled}
      disabled={disabled}
      title="Números dos Regionais"
      subtitle={subtitle}
      onClick={() => setCollapseOpen(!isCollapseOpen)}
      mixpanelTarget="Collapse Regionais"
      mixpanelPage={trackedProperties.dashboardPage}
    >
      <PedidosRegiao />
      <div className={classes.grid}>
        <ModalidadeRegiao />
        <CreditoRegiao />
      </div>
      <ModeloRegiao />
    </Collapse>
  );
};

CollapseRegionais.propTypes = {
  disabled: PropTypes.bool,
  subtitle: PropTypes.string,
  isCollapseOpen: PropTypes.bool,
  setCollapseOpen: PropTypes.func,
};

CollapseRegionais.defaultProps = {
  disabled: false,
  subtitle: '',
  isCollapseOpen: false,
  setCollapseOpen: () => {},
};

export default CollapseRegionais;
