import { connect } from 'react-redux';
import DescontoListRow from './descontoListRow';

import operations from '../../../../redux/operations';
import selector from '../../../../redux/selector';

const mapStateToProps = ({ descontos }) => ({
  mvs: descontos.details.mvsList,
  selectedMvsList: selector.selectSelectedMvsList(descontos),
  page: descontos.page.page,
});

const mapDispatchToProps = (dispatch) => ({
  setVeiculo: (oldId, mvs) => dispatch(operations.changeDescontoModel(oldId, mvs)),
  removeVeiculo: (id) => dispatch(operations.removeSelectedMvs(id)),
  deleteVeiculo: (id) => dispatch(operations.setStatus(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DescontoListRow);
