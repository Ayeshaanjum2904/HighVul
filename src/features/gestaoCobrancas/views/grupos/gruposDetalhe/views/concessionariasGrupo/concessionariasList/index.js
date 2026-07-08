/* eslint-disable object-property-newline */
import { connect } from 'react-redux';

import ConcessionariasList from './concessionariasList';
import selectors from '../../../redux/selectors';
import operations from '../../../redux/operations/operations';
import concessionariasPageOperations from '../../../../../concessionarias/concessionariasPage/redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: selectors.isLoading.concessionarias(cobrancas),
  isError: selectors.isError.concessionarias(cobrancas),
  concessionarias: cobrancas.grupos.details.concessionarias,
});

const mapDispatchToProps = (dispatch) => ({
  setConcessionaria: (concessionaria) => {
    dispatch(operations.setConcessionaria(concessionaria));
  },
  openModalDetalhe: (concessionaria) => {
    dispatch(operations.openModalDetalheConcessionaria(concessionaria));
  },
  setConcessionariasPage: (page, concessionaria) => {
    dispatch(concessionariasPageOperations.setConcessionariasPage(page, concessionaria));
  },
  deleteConcessionaria: () => dispatch(operations.deleteConcessionaria()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConcessionariasList);
