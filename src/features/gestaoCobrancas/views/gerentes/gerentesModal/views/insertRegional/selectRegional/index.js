import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import SelectRegional from './selectRegionalGerentes';

const mapStateToProps = ({ cobrancas }) => ({
  regional: cobrancas.gerentes.modal.gerente.regional,
  regionaisList: selectors.regionaisList(cobrancas),
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedRegional: (propertyName, value) => {
    dispatch(operations.setSelectedRegional(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRegional);
