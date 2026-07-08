import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { trackedProperties } from 'modules';

import Collapse from 'common/layout/collapse';
import PedidosConcessionaria from './pedidosConcessionaria';

import './collapseConcessionarias.scss';

const CollapseConcessionarias = ({
  disabled, isCollapseOpen, setCollapseOpen, subtitle,
}) => {
  useEffect(() => {
    if (disabled)setCollapseOpen(false);
  }, [disabled, setCollapseOpen]);

  return (
    <Collapse
      isOpen={isCollapseOpen && !disabled}
      disabled={disabled}
      title="Números das Concessionárias"
      subtitle={subtitle}
      onClick={() => setCollapseOpen(!isCollapseOpen)}
      mixpanelTarget="Collapse Concessionárias"
      mixpanelPage={trackedProperties.dashboardPage}
    >
      <PedidosConcessionaria />
    </Collapse>
  );
};

CollapseConcessionarias.propTypes = {
  disabled: PropTypes.bool,
  isCollapseOpen: PropTypes.bool,
  setCollapseOpen: PropTypes.func,
  subtitle: PropTypes.string,
};

CollapseConcessionarias.defaultProps = {
  disabled: false,
  isCollapseOpen: false,
  setCollapseOpen: () => {},
  subtitle: null,
};

export default CollapseConcessionarias;
