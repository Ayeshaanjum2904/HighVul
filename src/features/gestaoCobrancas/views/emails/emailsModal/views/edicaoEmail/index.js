import { connect } from 'react-redux';

import EdicaoEmail from './edicaoEmail';

import operations from '../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  corpo: cobrancas.emails.modal.template?.corpoEmail,
});

const mapDispatchToProps = (dispatch) => ({
  updateValue: (value) => {
    dispatch(operations.updateEmailProperty('corpoEmail', value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(EdicaoEmail);
