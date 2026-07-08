import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './loading.scss';

const Loading = ({ mensagem, delay, breakLine }) => {
  const [showMessage, setShowMessage] = useState(!delay);

  useEffect(() => {
    let timer = null;
    if (delay) {
      timer = setTimeout(() => setShowMessage(true), 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div className="loading-component">
      <div className="loading-component__loading-dots" />
      {showMessage && (
        <div className={`loading-component__mensagem ${breakLine ? 'loading-component__breakLine' : ''}`}>
          {mensagem}
        </div>
      )}
    </div>
  );
};

Loading.propTypes = {
  mensagem: PropTypes.string,
  delay: PropTypes.bool,
  breakLine: PropTypes.bool,
};

Loading.defaultProps = {
  mensagem: null,
  delay: false,
  breakLine: false,
};

export default Loading;
