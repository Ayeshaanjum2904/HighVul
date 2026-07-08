/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

const HighlightText = ({ colors }) => (
  <select className="ql-background" default="yellow">
    {(colors || []).map((c, i) => (
      <option value={c} key={i} />
    ))}
  </select>
);

HighlightText.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HighlightText;
