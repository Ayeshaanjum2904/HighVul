import { connect } from 'react-redux';

import PreviewComunicados from './previewComunicado';
import selectors from '../../redux/selectors';

const mapStateToProps = ({ comunicados }) => ({
  dataEmissao: comunicados.comunicados.modal.dataEmissao,
  brands: selectors.selectFormattedBrands(comunicados),
  fileName: comunicados.comunicados.modal.fileName,
});

export default connect(mapStateToProps, null)(PreviewComunicados);
