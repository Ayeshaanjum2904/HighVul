import React from 'react';

import InputFileBase from './views/inputFile';

import './inputFile.scss';

const InputFile = () => (
  <div className="comunicados__modal__input-file-container">
    <div className="comunicados__modal__input-file-container__input">
      <InputFileBase />
    </div>
  </div>
);

InputFile.propTypes = {
};

InputFile.defaultProps = {
};

export default InputFile;
