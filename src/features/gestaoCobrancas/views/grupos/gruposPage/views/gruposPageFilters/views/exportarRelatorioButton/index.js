import { connect } from 'react-redux';

import ExportarRelatorioButton from 'common/controls/exportarRelatorioButton';

import GruposPageOperations from '../../../../redux/operations';

const mapStateToProps = (state) => ({
  isExporting: state.cobrancas.grupos.page.exportRelatorio.isExporting,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(GruposPageOperations.exportRelatorio()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExportarRelatorioButton);
