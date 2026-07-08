import React from 'react';
import PropTypes from 'prop-types';
import PreviewFileButton from 'common/controls/previewFileButton';

import './duplicata.scss';

const Duplicata = ({ duplicata, fileUrl }) => (
  <div className="historico__duplicata_line">
    {duplicata}
    <PreviewFileButton
      fileUrl={fileUrl}
      mixpanelAction="Preview duplicatas cobrança"
    />
  </div>
);

Duplicata.propTypes = {
  duplicata: PropTypes.number,
  fileUrl: PropTypes.string,
};

Duplicata.defaultProps = {
  duplicata: null,
  fileUrl: null,
};

export default Duplicata;
