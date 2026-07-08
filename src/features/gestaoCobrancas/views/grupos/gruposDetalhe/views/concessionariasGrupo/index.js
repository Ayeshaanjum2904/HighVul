import { connect } from 'react-redux';

import ConcessionariasGrupo from './concessionariasGrupo';

import operations from '../../redux/operations/operations';
import selectors from '../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.grupos.details.updateConcessionaria.isLoading,
  isModalDetalheOpen: cobrancas.grupos.details.updateConcessionaria.isDetailsOpen,
  isModalAssociacaoOpen: cobrancas.grupos.details.updateConcessionaria.isAssociacaoOpen,
  isLoadingConcessionaria: selectors.isLoading.concessionarias(cobrancas),
});

const mapDispatchToProps = (dispatch) => ({
  registerLoader: (id, loadOp) => {
    dispatch(operations.registerLoader(id, loadOp));
  },
  getConcessionariasGrupo: () => operations.getConcessionariasGrupo(),
  deleteConcessionaria: () => dispatch(operations.deleteConcessionaria()),
  closeModalDetalhe: () => dispatch(operations.closeModalDetalheConcessionaria()),
  closeModalAssociacao: () => dispatch(operations.closeModalAssociacarConcessionaria()),
  insertConcessionarias: () => dispatch(operations.insertConcessionarias()),
  openModalAssociacao: () => dispatch(operations.openModalAssociarConcessionaria()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConcessionariasGrupo);
