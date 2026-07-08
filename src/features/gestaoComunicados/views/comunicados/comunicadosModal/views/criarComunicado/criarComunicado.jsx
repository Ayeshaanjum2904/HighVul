import React from 'react';

import PropTypes from 'prop-types';
import TextFilterDebounce from 'common/controls/textFilterDebounce/textFilterDebounce';
import { Box } from '@mui/material';
import colors from 'assets/styles/colors';
import _ from 'lodash';
import CancelIcon from '@material-ui/icons/Cancel';
import InputFile from './views/inputFile';
import SelectDataEmissao from './views/selectDataEmissao';
import BrandSelector from './views/brandSelector';

import './criarComunicado.scss';

const CriarComunicado = ({
  setFileName, fileName, urlFile, deleteFile,
}) => (
  <div className="comunicado__modal-criar__content">
    <div className="comunicado__modal-criar__content__file-description">
      <span
        className="comunicado__modal_criar__subtitle"
        data-cy="comunicado-subtitle"
      >
        1. Preencha as informações sobre o comunicado:
      </span>
      <div
        className="comunicado__modal-criar__content__file-description__selectors"
        data-cy="comunicado-selectors"
      >
        <div className="comunicado__modal-criar__content__file-description__selectors__documento">
          <TextFilterDebounce
            label="Título*:"
            placeholder="Inserir título do comunicado"
            value={fileName}
            setValue={setFileName}
            dataCy="titulo-documento"
            endAdornment={
              !_.isNull(urlFile) ? (
                <Box marginLeft="12px" paddingTop="8px">
                  <CancelIcon
                    onClick={deleteFile}
                    style={{
                      fontSize: '16px',
                      cursor: 'pointer',
                      color: colors.secundary_color_700,
                    }}
                  />
                </Box>
              ) : null
            }
          />
        </div>
        <div className="comunicado__modal-criar__content__file-description__selectors__emissao">
          <SelectDataEmissao />
        </div>
      </div>

      <div
        className="comunicado__modal-criar__content__file-description__input-file"
        data-cy="comunicado-input-file"
      >
        <InputFile />
      </div>
    </div>
    <Box width="100%" borderBottom={`1px solid ${colors.secundary_color_200}`} />
    <div
      className="comunicado__modal-criar__content__dealer-infos"
      data-cy="comunicado-dealer-infos"
    >
      <span
        className="comunicado__modal_criar__subtitle"
      >
        2. Selecione quem receberá esse comunicado:
      </span>
      <div className="comunicado__modal-criar__content__dealer-infos__brand">
        <BrandSelector />
      </div>
    </div>
  </div>
);

CriarComunicado.propTypes = {
  fileName: PropTypes.string,
  setFileName: PropTypes.func,
  urlFile: PropTypes.string,
  deleteFile: PropTypes.func,
};

CriarComunicado.defaultProps = {
  fileName: '',
  setFileName: () => {},
  urlFile: null,
  deleteFile: () => {},
};
export default CriarComunicado;
