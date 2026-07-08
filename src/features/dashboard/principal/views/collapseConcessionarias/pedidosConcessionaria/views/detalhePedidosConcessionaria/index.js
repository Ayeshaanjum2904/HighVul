import { connect } from 'react-redux';

import DetalheModalidadeRegiao from './detalhePedidosConcessionaria';

const mapStateToProps = ({ dashboard }) => ({
  pedidosConcessionaria: dashboard.principal.pedidosConcessionaria.data,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DetalheModalidadeRegiao);
