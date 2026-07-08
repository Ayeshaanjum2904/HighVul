import { connect } from 'react-redux';

import InputProduto from './inputProduto';

const mapStateToProps = ({ limites }) => ({
  produto: limites.details.modal.detalheSolicitacao?.produtoOrigem,
});

export default connect(mapStateToProps)(InputProduto);
