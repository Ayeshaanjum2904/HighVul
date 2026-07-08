import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from 'utils/format';
import PreviewFile from '../previewFile';

import './previewComunicado.scss';

const PreviewComunicado = ({
  dataEmissao,
  brands,
  fileName,
}) => (
  <div className="comunicados__modal-preview__container">
    3. Confirme os dados do seu comunicado e faça a publicação:

    <div className="comunicados__modal-preview__container__tipo">
      <span>
        Titulo:
      </span>
      {fileName}
    </div>
    <div className="comunicados__modal-preview__container__emissao">
      <span>
        Data de emissão:
      </span>
      {formatDate(dataEmissao, 'DD MMM yyyy')}
    </div>
    <div className="comunicados__modal-preview__container__brands">
      <span>
        Brand:
      </span>
      {brands.join(', ')}
    </div>
    <div className="comunicados__modal-preview__container__file">
      {fileName}
      <PreviewFile />
    </div>
  </div>
);

PreviewComunicado.propTypes = {
  dataEmissao: PropTypes.object,
  brands: PropTypes.string,
  fileName: PropTypes.string,
};

PreviewComunicado.defaultProps = {
  dataEmissao: null,
  brands: null,
  fileName: null,
};

export default PreviewComunicado;
