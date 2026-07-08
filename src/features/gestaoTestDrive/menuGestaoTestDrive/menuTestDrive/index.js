import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import MenuTestDrive from './menuTestDrive';
import VeiculosPageOperations from '../../veiculos/views/veiculosPage/redux/operations';

const mapDispatchToProps = (dispatch) => ({
  navTo: (path) => { dispatch(push(path)); },
  setVeiculosPage: (page) => dispatch(VeiculosPageOperations.setVeiculosPage(page)),
});

export default connect(null, mapDispatchToProps)(MenuTestDrive);
