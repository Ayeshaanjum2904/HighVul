import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import AlertaMensagem from '../alertaMensagem';

const ErroPage = ({
  mensagem, subMensagem, breakLine,
}) => (
  <Box
    className="aba-de-erro"
    data-cy="AbaDeErro"
    sx={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px',
      minHeight: 'calc(100vh - 200px)',
    }}
  >
    <AlertaMensagem
      breakLine={breakLine}
      mensagem={mensagem}
      subMensagem={subMensagem}
    />
  </Box>
);

ErroPage.propTypes = {
  mensagem: PropTypes.string,
  subMensagem: PropTypes.string,
  breakLine: PropTypes.bool,
};

ErroPage.defaultProps = {
  mensagem: null,
  subMensagem: null,
  breakLine: false,
};

export default ErroPage;
