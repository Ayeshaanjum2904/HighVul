import { connect } from 'react-redux';
import operations from '../../../redux/operations';
import ButtonRetain from './buttonRetain';

const mapStateToProps = ({ limitesAprovados }) => ({
  selectedIds: limitesAprovados.selectedIds,
});

const mapDispatchToProps = (dispatch) => ({
  reterProposta: (status) => {
    dispatch(
      operations.updateAndSaveStatus(null, status),
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonRetain);
