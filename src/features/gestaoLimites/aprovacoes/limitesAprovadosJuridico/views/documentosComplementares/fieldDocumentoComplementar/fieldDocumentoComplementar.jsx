import { React } from 'react';
import PropTypes from 'prop-types';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import colors from 'assets/styles/colors';
import { Info } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import TooltipMessage from 'common/controls/tooltipMessage';
import {
  Container, DocumentoInput, PaperClipIcon,
  Field, Label, NomeDocumento, TamanhoDocumento,
} from './filedDocumentoComplementar.style';

const useStyles = makeStyles({
  customSizeIcon: {
    fontSize: '16px',
  },
});

const fieldDocumentoComplementar = ({
  label, documento,
}) => {
  const classes = useStyles();

  const renderField = (file, index) => (
    <Field key={index}>
      <PaperClipIcon><AttachFileIcon className={classes.customSizeIcon} /></PaperClipIcon>
      <TooltipMessage title={file?.nomeOriginal} maxWidth="480px">
        <NomeDocumento>{file?.nomeOriginal}</NomeDocumento>
      </TooltipMessage>
      <TamanhoDocumento>{` (${file?.tamanho}Mb)`}</TamanhoDocumento>
    </Field>
  );

  return (
    <Container>
      <DocumentoInput>
        <Label>
          {label}
          <IconButtonTooltip
            tooltip="O anexo do arquivo deste campo é opcional. Você pode inserir uma imagem ou arquivo em pdf."
            maxWidth="270px"
            placement="top-start"
            color={colors.icon_color}
          >
            <Info />
          </IconButtonTooltip>
        </Label>
        {documento && documento.map((file, index) => renderField(file, index))}
      </DocumentoInput>
    </Container>
  );
};

fieldDocumentoComplementar.propTypes = {
  documento: PropTypes.array,
  label: PropTypes.string,
};

fieldDocumentoComplementar.defaultProps = {
  documento: [],
  label: 'Arquivo',
};

export default fieldDocumentoComplementar;
