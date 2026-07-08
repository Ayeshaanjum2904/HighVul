import { connect } from 'react-redux';
import { trackedProperties } from 'modules';

import ConcessionariaList from 'common/views/concessionariaList';
import operations from '../../redux/operations';

const mapStateToProps = ({ descontos }) => ({
  selectedConcessionarias: descontos.details.concessionariasSelecionadas,
  isLoading: descontos.details.isLoadingConcessionariasList,
  mixpanelPage: trackedProperties.descontosPage,
});

const mapDispatchToProps = (dispatch) => ({
  getConcessionarias: () => dispatch(operations.getConcessionarias()),
  onAdd: () => dispatch(operations.setModalConcessionariaOpen(true)),
  onRemove: (value) => dispatch(operations.removeSelectedConcessionaria(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConcessionariaList);
