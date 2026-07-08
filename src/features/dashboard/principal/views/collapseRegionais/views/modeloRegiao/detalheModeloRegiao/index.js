import { connect } from 'react-redux';

import DetalheModalidadeRegiao from './detalheModeloRegiao';

const mapStateToProps = ({ dashboard }) => ({
  modeloRegiao: dashboard.principal.modeloRegiao,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DetalheModalidadeRegiao);
