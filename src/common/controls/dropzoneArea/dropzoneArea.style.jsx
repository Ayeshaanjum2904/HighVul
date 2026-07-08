import { makeStyles } from '@material-ui/styles';
import colors from 'assets/styles/colors';
import styled from 'styled-components';

export const BoxDropzone = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 4px;
  background-color: ${(props) => (props.isDragActive ? colors.primary_color_100 : colors.primary_color_50)};
  border: 1px;
  border-style: dashed;
  border-color: ${colors.primary_color_400};
  user-select: none;
`;

export const useStyles = makeStyles({
  textoSoltar: {
    color: colors.primary_color_600,
    fontSize: '18px',
  },
  textoLabel: {
    color: colors.primary_color_600,
    fontSize: '14px',
  },
  textoOu: {
    color: colors.primary_color_600,
    fontSize: '14px',
    lineHeight: '18px',
  },
  linha: {
    width: '60px',
    borderTop: '1px solid',
    borderColor: colors.primary_color_600,
    borderRadius: '5px',
  },
  errorColor: {
    color: colors.error_color_200,
  },
  errorBox: {
    backgroundColor: '#ED5C6F14 !important',
    borderColor: `${colors.error_color_200} !important`,
  },
  errorBorder: {
    borderColor: `${colors.error_color_200} !important`,
  },
  errorOnDrag: {
    backgroundColor: '#ED5C6F30 !important',
  },
});
