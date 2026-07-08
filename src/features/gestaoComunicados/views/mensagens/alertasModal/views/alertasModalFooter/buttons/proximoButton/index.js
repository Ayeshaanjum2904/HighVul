import { connect } from 'react-redux';

import ProximoButton from './proximoButton';

import operations from '../../../../redux/operations';
import selectors from '../../../../redux/selectors';
import modalStatus from '../../../../status';

const mapStateToProps = ({ comunicados }) => ({
  disabled: selectors.validateForm(comunicados),
  isUploadingImagem: comunicados.alertas.modal.uploadImagem.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: async () => {
    await dispatch(operations.requestPreviewSignedUrl());
    dispatch(operations.setModalStatus(modalStatus.concluido));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProximoButton);
