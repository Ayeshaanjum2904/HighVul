/* eslint-disable object-property-newline */
import { connect } from 'react-redux';
import SolicitacaoLimiteList from './solicitacaoLimiteList';

import selectors from '../../redux/selectors';

const mapStateToProps = ({ limites }) => ({
  isLoading: limites.page.solicitacoesList.isLoading,
  isError: limites.page.solicitacoesList.isError,
  gruposSolicitacoes: selectors.gruposSolicitacoes(limites),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SolicitacaoLimiteList);
