import { makeStyles } from '@material-ui/styles';
import colors from 'assets/styles/colors';
import styled from 'styled-components';

export const TextoDocumento = styled.span`
  font-size: 12px;
  color: ${(props) => (props.documentoAnexado ? `${colors.process_color_300}` : `${colors.secundary_color_600}`)};
  text-decoration: ${(props) => (props.documentoAnexado && 'underline')};
  max-width: ${(props) => (props.maxWidth)};
  background: transparent !important;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  overflow: hidden;
`;
export const TamanhoDocumento = styled.span`
  text-decoration: underline;
  color: ${colors.secundary_color_800};
  white-space: pre-wrap;
`;
export const BoxBotao = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid;
  padding: 8px 12px;
  background-color: #E4E9F25C;
  border-color: ${(props) => (props.borderColor)};
  border-radius: 4px;
`;

export const useStyles = makeStyles({
  input: {
    display: 'none',
  },
  loading: {
    marginTop: 3,
  },
  textoLabel: {
    textAlign: 'left',
    color: `${colors.secundary_color_700}`,
    fontSize: '12px',
    marginBottom: '6px',
    marginLeft: '12px',
  },
  textoError: {
    textAlign: 'left',
    color: `${colors.error_color_300}`,
    fontSize: '12px',
    marginBottom: '6px',
  },
  icone: {
    color: '#656C83',
    marginRight: '8px',
  },
  iconeExcluir: {
    fontSize: '16px',
  },
  botaoExcluir: {
    marginLeft: '8px',
    marginTop: '4px',
  },
  container: {
    display: 'flex',
    background: 'white',
    position: 'relative',
  },
  updateButton: {
    width: '100%',
  },
});
