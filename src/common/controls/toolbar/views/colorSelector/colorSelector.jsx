/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

const ColorSelector = ({ colors }) => (
  <select className="ql-color" defaultValue="">
    {(colors || []).map((c, i) => (
      <option value={c} key={i} />
    ))}
  </select>
);

ColorSelector.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ColorSelector;
