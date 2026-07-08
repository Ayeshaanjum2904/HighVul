import { connect } from 'react-redux';
import { Mixpanel } from 'modules';
import PreviewImagem from './previewImagem';
import operations from '../../../../redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  isLoading: comunicados.alertas.modal.uploadImagem.isLoading,
  hasImagem: comunicados.alertas.modal.alerta.urlImagem !== null,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: async () => {
    Mixpanel.trackPreviewFiles('Preview Imagem do alerta');
    const signedUrl = await dispatch(operations.requestPreviewSignedUrl());
    if (signedUrl) {
      window.open(signedUrl);
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewImagem);
