import { connect } from 'react-redux';
import { Mixpanel } from 'modules';
import PreviewFile from './previewFile';

import selectors from '../../redux/selectors';
import operations from '../../redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  disabled: selectors.isPreviewComunicadoDisabled(comunicados),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: async () => {
    Mixpanel.trackPreviewFiles('Preview comunicado');
    const signedUrl = await dispatch(operations.requestPreviewSignedUrl());
    if (signedUrl) {
      window.open(signedUrl);
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewFile);
