import React from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import WarningAmberRoundedIcon from '@mui/icons-material/Warning';
import {
  ErrosWrapper,
  ALERT_SX,
  TITULO_SX,
  TABLE_CONTAINER_SX,
  TABLE_SX,
  HEADER_CELL_SX,
  BODY_ROW_SX,
  BODY_CELL_SX,
} from './errorDisplay.style';

const buildAlertMessage = (todasLinhasComErro, totalLinhasCorretas, totalLinhasComErro) => {
  if (todasLinhasComErro) {
    return (
      <>
        Todas as linhas da planilha contêm erros.
        {' '}
        Corrija o arquivo e faça um novo upload para criar a ordem.
      </>
    );
  }

  const validasText = totalLinhasCorretas === 1
    ? '1 linha válida'
    : `${totalLinhasCorretas} linhas válidas`;

  const erroText = totalLinhasComErro === 1
    ? (
      <>
        {'1 linha não pôde ser processada e '}
        <strong>não vai ser incluída na ordem criada.</strong>
      </>
    )
    : (
      <>
        {`${totalLinhasComErro} linhas não puderam ser processadas e `}
        <strong>não vão ser incluídas na ordem criada.</strong>
      </>
    );

  const foramEncontradas = totalLinhasCorretas === 1
    ? 'Foi encontrada '
    : 'Foram encontradas ';

  return (
    <>
      {foramEncontradas}
      {validasText}
      {' para a criação de ordem.'}
      <br />
      {erroText}
      <br />
      Baixe o relatório de erros para desbloquear a criação de ordem.
    </>
  );
};

const ErrorDisplay = ({
  erros,
  totalLinhasCorretas,
  totalLinhasComErro,
  todasLinhasComErro,
}) => {
  if (!erros || erros.length === 0) return null;

  return (
    <ErrosWrapper>
      <Alert severity="warning" icon={<WarningAmberRoundedIcon />} sx={ALERT_SX}>
        {buildAlertMessage(todasLinhasComErro, totalLinhasCorretas, totalLinhasComErro)}
      </Alert>

      <Typography sx={TITULO_SX}>
        {`Detalhamento dos erros (${erros.length})`}
      </Typography>

      <TableContainer sx={TABLE_CONTAINER_SX}>
        <Table size="small" sx={TABLE_SX}>
          <TableHead>
            <TableRow>
              {['Linha', 'Coluna', 'Descrição do erro'].map((col) => (
                <TableCell key={col} sx={HEADER_CELL_SX}>
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {erros.map((erro) => (
              <TableRow key={`${erro.linha}-${erro.coluna}`} sx={BODY_ROW_SX}>
                <TableCell sx={BODY_CELL_SX}>{erro.linha}</TableCell>
                <TableCell sx={BODY_CELL_SX}>{erro.coluna}</TableCell>
                <TableCell sx={BODY_CELL_SX}>{erro.descricao}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ErrosWrapper>
  );
};

ErrorDisplay.propTypes = {
  erros: PropTypes.arrayOf(
    PropTypes.shape({
      linha: PropTypes.number,
      coluna: PropTypes.string,
      descricao: PropTypes.string,
    }),
  ),
  totalLinhasCorretas: PropTypes.number,
  totalLinhasComErro: PropTypes.number,
  todasLinhasComErro: PropTypes.bool,
};

ErrorDisplay.defaultProps = {
  erros: [],
  totalLinhasCorretas: 0,
  totalLinhasComErro: 0,
  todasLinhasComErro: false,
};

export default ErrorDisplay;
