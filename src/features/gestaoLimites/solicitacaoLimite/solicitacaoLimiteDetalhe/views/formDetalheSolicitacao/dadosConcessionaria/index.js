import { connect } from 'react-redux';

import DadosConcessionaria from './dadosConcessionaria';

const mapStateToProps = ({ limites }) => ({
  tipo: limites.details.modal?.detalheSolicitacao?.tipo,
});

export default connect(mapStateToProps, null)(DadosConcessionaria);
