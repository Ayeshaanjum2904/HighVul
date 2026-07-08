import { connect } from 'react-redux';
import ComunicadoModalStatusBar from './comunicadoModalStatusBar';

const mapStateToProps = ({ comunicados }) => ({
  status: comunicados.comunicados.modal.templateModal,

});

export default connect(mapStateToProps, null)(ComunicadoModalStatusBar);
