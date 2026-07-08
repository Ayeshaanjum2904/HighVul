import { connect } from 'react-redux';

import operations from '../../../../../../redux/operations';

import InputMotivo from './inputMotivo';

const mapStateToProps = ({ limites }) => ({
  motivo: limites.details.modal?.motivo,
});

const mapDispatchToProps = (dispatch) => ({
  updateMotivo: (motivo) => dispatch(operations.updateMotivo(motivo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputMotivo);
