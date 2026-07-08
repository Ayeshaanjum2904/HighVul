import { connect } from 'react-redux';

import ConcessionariasAssociadasList from './concessionariasAssociadasList';

import operations from '../../../redux/operations/operations';

const mapStateToProps = ({ cobrancas }) => ({
  concessionarias: cobrancas.grupos.details.updateConcessionaria.associacoes,
});

const mapDispatchToProps = (dispatch) => ({
  desassociarConcessionaria: (id) => dispatch(operations.desassociarConcessionaria(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConcessionariasAssociadasList);
