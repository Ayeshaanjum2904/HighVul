import { connect } from 'react-redux';

import * as operations from '../../../redux/operations';

import SeletorPagina from './seletorPagina';

const mapStateToProps = ({ ofertas }) => ({
  pagina: ofertas.search.pagina,
  ofertas: ofertas.ofertas.ofertas,
  isLoading: ofertas.ofertas.isLoading,
  itensPorPagina: ofertas.search.itensPorPagina,
});

const mapDispatchToProps = (dispatch) => ({
  setPagina: (pagina) => dispatch(operations.setPagina(pagina)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SeletorPagina);
