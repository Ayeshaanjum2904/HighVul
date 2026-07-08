import { connect } from 'react-redux';

import InputData from './inputData';

const mapStateToProps = ({ limites }) => ({
  data: limites.details.modal.detalheSolicitacao?.data,
});

export default connect(mapStateToProps)(InputData);
