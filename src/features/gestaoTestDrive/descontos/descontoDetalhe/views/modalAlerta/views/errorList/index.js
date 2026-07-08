import { connect } from 'react-redux';

import ErrorList from './errorList';

const mapStateToProps = ({ descontos }) => ({
  errors: descontos.details.modalError.errors,
});

export default connect(mapStateToProps, null)(ErrorList);
