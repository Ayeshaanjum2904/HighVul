import { connect } from 'react-redux';

import AssuntoInput from './assuntoInput';

import operations from '../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  assunto: cobrancas.emails.modal.template?.assuntoEmail,
});

const mapDispatchToProps = (dispatch) => ({
  updateEmailProperty: (value) => {
    dispatch(operations.updateEmailProperty('assuntoEmail', value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(AssuntoInput);
