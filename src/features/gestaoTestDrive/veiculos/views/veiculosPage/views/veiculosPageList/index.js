/* eslint-disable object-property-newline */
import { connect } from 'react-redux';
import VeiculosPageList from './veiculosPageList';
import operations from '../../redux/operations';
import DetalheOperations from '../../../veiculosDetalhe/redux/operations';

const mapStateToProps = ({ veiculos }) => ({
  isLoading: veiculos.page.veiculosList.isLoading,
  isError: veiculos.page.veiculosList.isError,
  veiculos: veiculos.page.veiculosList.veiculos,
  page: veiculos.page.veiculosList.page,
  ipp: veiculos.page.veiculosList.ipp,
  totalItems: veiculos.page.veiculosList.totalItems,
  isModalOpen: veiculos.details.isOpen,
  field: veiculos.page.ordenacao.nomeColuna,
  sort: veiculos.page.ordenacao.sentidoOrdenacao,
});

const mapDispatchToProps = (dispatch) => ({
  setPage: (page) => dispatch(operations.setPage(page)),
  setIpp: (ipp) => dispatch(operations.setIpp(ipp)),
  setSortingOrder: (nome, ordem) => dispatch(operations.setSortingOrder(nome, ordem)),
  openDetalheVeiculo: (id) => dispatch(DetalheOperations.openModal(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VeiculosPageList);
