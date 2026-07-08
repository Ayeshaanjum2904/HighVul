import { connect } from 'react-redux';

import ProximoButton from './proximoButton';

import operations from '../../../../redux/operations';
import selectors from '../../../../redux/selector';

const mapStateToProps = ({ cobrancas }) => ({
  disabled: selectors.disabledNext(cobrancas),
});

const mapDispatchToProps = (dispatch) => ({
  setModalStatus: (status) => dispatch(operations.setModalTemplate(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProximoButton);
