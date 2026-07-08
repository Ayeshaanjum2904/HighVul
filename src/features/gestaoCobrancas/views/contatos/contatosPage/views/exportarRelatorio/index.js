import { connect } from 'react-redux';
import operations from '../../redux/operations';
import ExportarRelatorio from './exportarRelatorio';

const mapStateToProps = (state) => {
  const { isExporting } = state.cobrancas.contatos.page.exportRelatorio;

  return {
    isExporting,
  };
};

const mapDispatchToProps = (dispatch) => ({
  exportarRelatorio: () => dispatch(operations.exportarRelatorio()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExportarRelatorio);
