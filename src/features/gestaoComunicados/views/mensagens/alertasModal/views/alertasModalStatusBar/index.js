import { connect } from 'react-redux';
import AlertasModalStatusBar from './alertasModalStatusBar';

// import selectors from '../../redux/selectors';

const mapStateToProps = ({ comunicados }) => ({
  status: comunicados.alertas.modal.modalStatus,
  isLoading: false,
});

export default connect(mapStateToProps, null)(AlertasModalStatusBar);
