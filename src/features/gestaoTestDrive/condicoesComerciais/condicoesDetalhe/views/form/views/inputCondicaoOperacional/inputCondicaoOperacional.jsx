import React from 'react';
import PropTypes from 'prop-types';
import TextFilterDebounce from 'common/controls/textFilterDebounce/textFilterDebounce';

import './inputCondicaoOperacional.scss';

const InputCondicaoOperacional = ({ condicaoOperacional, setCondicaoOperacional }) => (
  <div className="input-condicao-operacional">

    <TextFilterDebounce
      label="Condição operacional"
      value={condicaoOperacional}
      setValue={setCondicaoOperacional}
      showIcon={false}
    />
  </div>
);
InputCondicaoOperacional.propTypes = {
  condicaoOperacional: PropTypes.string,
  setCondicaoOperacional: PropTypes.func,
};

InputCondicaoOperacional.defaultProps = {
  condicaoOperacional: null,
  setCondicaoOperacional: () => { },
};

export default InputCondicaoOperacional;
