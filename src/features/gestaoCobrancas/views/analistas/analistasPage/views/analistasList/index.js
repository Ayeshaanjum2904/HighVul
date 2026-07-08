import { connect } from 'react-redux';
import AnalistasList from './analistasList';
import operationsModal from '../../../analistasModal/redux/operations';
import operations from '../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.analistas.page.list.isLoading,
  isError: cobrancas.analistas.page.list.isError,
  analistas: cobrancas.analistas.page.list.analistas,
  page: cobrancas.analistas.page.pageParams.page,
  ipp: cobrancas.analistas.page.pageParams.ipp,
  totalItems: cobrancas.analistas.page.pageParams.totalItems,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal, regional, marca) => dispatch(
    operationsModal.openModal(modal, regional, marca),
  ),
  setPage: (page) => dispatch(operations.setPage(page)),
  setIpp: (ipp) => dispatch(operations.setIpp(ipp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalistasList);
