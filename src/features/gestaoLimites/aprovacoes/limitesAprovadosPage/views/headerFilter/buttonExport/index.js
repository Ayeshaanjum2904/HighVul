import { connect } from 'react-redux';
import operations from '../../../redux/operations';
import ButtonSend from './buttonExport';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  exportarRelatorio: () => {
    dispatch(
      operations.getRelatorioAprovacoes(),
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSend);
