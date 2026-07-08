import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import SelectRegional from './selectRegionalAnalistasModal';

const mapStateToProps = ({ cobrancas }) => ({
  regional: cobrancas.analistas.modal.analista.regional,
  regionaisList: selectors.regionaisList(cobrancas),
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedRegional: (propertyName, value) => {
    dispatch(operations.setSelectedRegional(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRegional);
