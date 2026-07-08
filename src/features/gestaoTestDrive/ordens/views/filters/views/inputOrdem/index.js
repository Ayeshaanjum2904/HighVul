import { connect } from 'react-redux';
import operations from '../../../../redux/operations';
import InputOrdem from './inputOrdem';

const mapStateToProps = ({ ordens }) => ({
  ordem: ordens.filters.ordem,
});

const mapDispatchToProps = (dispatch) => ({
  setOrdem: (value) => {
    const parsed = value == null ? '' : parseInt(value, 10);
    dispatch(operations.setOrdem(parsed));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputOrdem);
