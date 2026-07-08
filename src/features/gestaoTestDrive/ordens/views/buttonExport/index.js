import { connect } from 'react-redux';
import operations from '../../redux/operations';
import ButtonExport from './buttonExport';

const mapStateToProps = ({ ordens }) => ({
  isLoading: ordens.isRelatorioLoading,
});

const mapDispatchToProps = (dispatch) => ({
  exportarRelatorio: () => dispatch(operations.getRelatorioOrdens()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonExport);
