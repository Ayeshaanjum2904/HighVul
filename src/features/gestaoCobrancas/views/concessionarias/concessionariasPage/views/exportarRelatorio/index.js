import { connect } from 'react-redux';
import operations from '../../redux/operations';
import ExportarRelatorio from './exportarRelatorio';

const mapStateToProps = (state) => {
  const { isLoading } = state.cobrancas.concessionarias.page.exportRelatorio;

  return {
    isExporting: isLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  exportarRelatorio: () => dispatch(operations.exportarRelatorio()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExportarRelatorio);
