import { connect } from 'react-redux';

import ConcessionariaSelector from './concessionariaSelector';

import operations from '../../../redux/operations/operations';

const mapStateToProps = ({ cobrancas }) => ({
  dealers: cobrancas.grupos.details.updateConcessionaria.dealers,
});

const mapDispatchToProps = (dispatch) => ({
  onSelect: (concessionaria) => dispatch(operations.associarConcessionaria(concessionaria)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConcessionariaSelector);
