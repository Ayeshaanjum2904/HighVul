import { connect } from 'react-redux';
import operations from '../../../redux/operations';
import ButtonSend from './buttonSend';

const mapStateToProps = ({ limitesAprovados }) => ({
  selectedIds: limitesAprovados.selectedIds,
});

const mapDispatchToProps = (dispatch) => ({
  enviarProposta: (status) => {
    dispatch(
      operations.updateAndSaveStatus(null, status),
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSend);
