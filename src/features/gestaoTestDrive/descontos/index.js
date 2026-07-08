import { connect } from 'react-redux';

import Descontos from './descontos';

const mapStateToProps = ({ descontos }) => ({
  page: descontos.page.page,
});

export default connect(
  mapStateToProps,
  null,
)(Descontos);
