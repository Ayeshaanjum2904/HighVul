import { connect } from 'react-redux';

import Grupos from './grupos';

const mapStateToProps = ({ cobrancas }) => ({
  page: cobrancas.grupos.page.displayPage,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Grupos);
