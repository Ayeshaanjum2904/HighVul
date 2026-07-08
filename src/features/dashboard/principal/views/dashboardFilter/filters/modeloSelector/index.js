import { connect } from 'react-redux';

import ModeloSelector from './modeloSelector';

import operations from '../../../../redux/reduxPage/operations/operations';
import * as selectors from '../../../../redux/reduxPage/selectors';

const mapStateToProps = ({ dashboard }) => ({
  modelos: selectors.formatModelos(dashboard),
  selectedModelos: dashboard.principal.page.filters?.selectedModelos,
  modelosIsLoading: dashboard.principal.page.modelos?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setModelos: (modelos) => dispatch(operations.setSelectedModelos(modelos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModeloSelector);
