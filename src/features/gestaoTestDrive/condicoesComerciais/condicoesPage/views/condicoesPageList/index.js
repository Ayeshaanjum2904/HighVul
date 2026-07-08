/* eslint-disable object-property-newline */
import { connect } from 'react-redux';

import CondicoesPageList from './condicoesPageList';
import operations from '../../redux/operations';

const mapStateToProps = ({ condicoesComerciais }) => ({
  isLoading: condicoesComerciais.page.list.isLoading,
  isError: condicoesComerciais.page.list.isError,
  condicoes: condicoesComerciais.page.list.condicoes,
});

const mapDispatchToProps = (dispatch) => ({
  setUpdatePage: (condicaoId, marca) => dispatch(operations.setUpdatePage(condicaoId, marca)),
  setDuplicatePage: (condicaoId, marca) => dispatch(operations.setDuplicatePage(condicaoId, marca)),
  disableCondicao: (id) => { dispatch(operations.disableCondicao(id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(CondicoesPageList);
