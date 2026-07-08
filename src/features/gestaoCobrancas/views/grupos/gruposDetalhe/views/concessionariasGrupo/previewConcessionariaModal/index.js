import { connect } from 'react-redux';

import PreviewConcessionariaModal from './previewConcessionariaModal';

import operations from '../../../redux/operations/operations';

const mapStateToProps = ({ cobrancas }) => ({
  nomeConcessionaria: cobrancas.grupos.details.updateConcessionaria.data.nome,
  isLoading: cobrancas.grupos.details.updateConcessionaria.isLoading,
  isError: cobrancas.grupos.details.updateConcessionaria.isError,
  isModalDetalheOpen: cobrancas.grupos.details.updateConcessionaria.isDetailsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  getDetalheConcessionaria: () => dispatch(operations.getDetalheConcessionaria()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewConcessionariaModal);
