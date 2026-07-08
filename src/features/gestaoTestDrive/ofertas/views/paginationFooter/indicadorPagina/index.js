import { connect } from 'react-redux';

import IndicadorPagina from './indicadorPagina';

const mapStateToProps = ({ ofertas }) => ({
  pagina: ofertas.search.pagina,
  itensPorPagina: ofertas.search.itensPorPagina,
  gruposOfertas: ofertas.ofertas.ofertas,
});

export default connect(mapStateToProps)(IndicadorPagina);
