import { connect } from 'react-redux';

import operations from '../redux/operations';
import SimuladorCorporate from './simuladorCorporate';

const mapStateToProps = ({ simulador }) => ({
  isLoadingAnexo: simulador.anexo.isLoading,
  errorMessage: simulador.anexo.errorMessage,
  dadosConvertidos: simulador.anexo.dadosConvertidos,
  isSaving: simulador.salvarTaxas.isLoading,
  isSaved: simulador.salvarTaxas.success,
  configuracao: simulador.configuracao,
  isExportingTaxas: simulador.exportTaxas.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  inserirAnexo: (file) => dispatch(operations.inserirAnexo(file)),
  salvarTaxas: () => dispatch(operations.salvarTaxas()),
  getConfiguracaoTaxasAtuais: () => dispatch(operations.getConfiguracaoTaxasAtuais()),
  exportarTaxas: () => dispatch(operations.exportarTaxas()),
  limparAnexoTaxas: () => dispatch(operations.limparAnexoTaxas()),
  resetStore: () => dispatch(operations.resetStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimuladorCorporate);
