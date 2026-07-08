import React from 'react';
import PropTypes from 'prop-types';

import MenuAside from '../menuAside';

import './withMenuAside.scss';

const WithMenuAside = ({ children }) => (
  <section className="app-container app-container--sub-menu">
    <MenuAside />
    <div style={{ overflow: 'auto' }}>
      { children }
    </div>
  </section>
);

WithMenuAside.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithMenuAside;
