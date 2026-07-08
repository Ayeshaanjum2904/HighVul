import React from 'react';
import PropTypes from 'prop-types';
import Duplicata from './duplicata';

import './duplicatas.scss';

const Duplicatas = ({ duplicatas }) => (
  <div className="historico__duplicatas">
    <div className="historico__duplicatas__label">
      Duplicatas enviadas em anexo
    </div>
    <div className="historico__duplicatas__content">
      {duplicatas ? (duplicatas || []).map((duplicata, i) => (
        <Duplicata
          key={i}
          duplicata={duplicata}
        />
      )) : null}
    </div>
  </div>
);

Duplicatas.propTypes = {
  duplicatas: PropTypes.array,
};

Duplicatas.defaultProps = {
  duplicatas: [],
};

export default Duplicatas;
