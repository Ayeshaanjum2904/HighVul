import { connect } from 'react-redux';

import GruposPageFilters from './gruposPageFilters';

import selectors from '../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  showWarning: selectors.showWarning(cobrancas),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GruposPageFilters);
