import { connect } from 'react-redux';

import DetalheModalidadeRegiao from './detalheCreditoRegiao';

const mapStateToProps = ({ dashboard }) => ({
  pedidosRegiao: dashboard.principal.pedidosRegiao,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DetalheModalidadeRegiao);
