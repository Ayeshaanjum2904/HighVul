import { connect } from 'react-redux';
import { trackedProperties } from 'modules';

import ConcessionariaList from 'common/views/concessionariaList';
import operations from '../../redux/operations';

const mapStateToProps = ({ condicoesComerciais }) => ({
  selectedConcessionarias: condicoesComerciais.details.concessionariasSelecionadas,
  isLoading: condicoesComerciais.details.isLoadingConcessionariasList,
  mixpanelPage: trackedProperties.condicoesPage,
});

const mapDispatchToProps = (dispatch) => ({
  getConcessionarias: () => dispatch(operations.getConcessionarias()),
  onAdd: () => dispatch(operations.setModalConcessionariaOpen(true)),
  onRemove: (value) => dispatch(operations.removeSelectedConcessionaria(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConcessionariaList);
