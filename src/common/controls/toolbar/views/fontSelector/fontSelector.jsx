import React from 'react';
import PropTypes from 'prop-types';
import { Quill } from 'react-quill';

const FontSelector = ({ fonts }) => {
  const fontsList = Quill.import('formats/font');
  fontsList.whiteList = fonts;
  Quill.register(fontsList, true);

  return (
    <select className="ql-font">
      {(fonts || []).map((f) => (
        <option value={f}>{f}</option>
      ))}
    </select>
  );
};

FontSelector.propTypes = {
  fonts: PropTypes.arrayOf(PropTypes.string),
};

FontSelector.defaultProps = {
  fonts: [],
};

export default FontSelector;
