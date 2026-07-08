import { connect } from 'react-redux';

import InputValor from './inputValor';

const mapStateToProps = ({ limites }) => ({
  valor: limites.details.modal.detalheSolicitacao?.valor,
});

export default connect(mapStateToProps)(InputValor);
