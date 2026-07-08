import React from 'react';
import PropTypes from 'prop-types';

import PreviewFileButton from 'common/controls/previewFileButton';

const PreviewContrato = ({
  disabled, urlContrato,
}) => (
  <PreviewFileButton
    disabled={disabled}
    fileUrl={urlContrato}
    mixpanelAction="Preview Contrato pedido"
  />
);

PreviewContrato.propTypes = {
  urlContrato: PropTypes.string,
  disabled: PropTypes.bool,
};

PreviewContrato.defaultProps = {
  disabled: false,
  urlContrato: null,
};

export default PreviewContrato;
