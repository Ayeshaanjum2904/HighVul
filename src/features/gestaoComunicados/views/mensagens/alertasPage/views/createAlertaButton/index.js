import { connect } from 'react-redux';

import modalAlertaOperations from '../../../alertasModal/redux/operations';
import CreateAlertaButton from './createAlertaButton';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  openModalAlerta: () => dispatch(modalAlertaOperations.openModalAlerta()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAlertaButton);
