import { connect } from 'react-redux';

import DetalheModalidadeRegiao from './detalheModalidadeRegiao';

const mapStateToProps = ({ dashboard }) => ({
  pedidosRegiao: dashboard.principal.pedidosRegiao,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DetalheModalidadeRegiao);
