import { connect } from 'react-redux';

import Concessionarias from './concessionarias';

const mapStateToProps = ({ cobrancas }) => ({
  page: cobrancas.concessionarias.page.page,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Concessionarias);
