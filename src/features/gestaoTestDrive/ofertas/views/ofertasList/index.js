/* eslint-disable object-property-newline */
import { connect } from 'react-redux';

import OfertaList from './ofertasList';

const mapStateToProps = ({ ofertas }) => ({
  gruposOfertas: ofertas.ofertas.ofertas,
  isLoading: ofertas.ofertas.isLoading,
  isError: ofertas.ofertas.isError,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(OfertaList);
