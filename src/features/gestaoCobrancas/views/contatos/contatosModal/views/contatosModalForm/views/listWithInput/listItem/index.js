import { connect } from 'react-redux';
import ListItem from './listItem';
import operations from '../../../../../redux/operations/operations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  removeError: (name, index) => dispatch(operations.removeError(name, index)),
  setRamalList: (ramal, index) => dispatch(operations.setRamalList(ramal, index)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
