import { connect } from 'react-redux';

import Duplicatas from './duplicatas';

const mapStateToProps = ({ cobrancas }) => ({
  duplicatas: cobrancas.historico.details.historicoDetail?.duplicatas,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Duplicatas);
