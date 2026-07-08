import { connect } from 'react-redux';

import CondicoesComerciais from './condicoesComerciais';

const mapStateToProps = ({ condicoesComerciais }) => ({
  page: condicoesComerciais.page.page,
});

export default connect(
  mapStateToProps,
  null,
)(CondicoesComerciais);
