import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import CardPreview from './cardPreview';
import WarningPreview from './warningPreview';
import WarningUpload from './warningUpload';

import './previewVeiculos.scss';

const PreviewVeiculos = ({ urlVeiculosList, showWarningUpload }) => (
  <div className="veiculos__preview-veiculos__outer">
    <div className="veiculos__preview-veiculos__outer_separator">
      <div className="veiculos__preview-veiculos__outer_separator_line" />
      OU
      <div className="veiculos__preview-veiculos__outer_separator_line" />
    </div>
    <div className="veiculos__preview-veiculos__container">
      {_.isEmpty(urlVeiculosList)
        ? <WarningPreview />
        : (urlVeiculosList || []).map((url, i) => (
          <CardPreview url={url} key={i} />
        ))}
    </div>
    {showWarningUpload ? <WarningUpload /> : null}
  </div>
);

PreviewVeiculos.propTypes = {
  urlVeiculosList: PropTypes.array,
  showWarningUpload: PropTypes.bool,
};
PreviewVeiculos.defaultProps = {
  urlVeiculosList: [],
  showWarningUpload: false,
};

export default PreviewVeiculos;
