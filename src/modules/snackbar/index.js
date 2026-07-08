import { connect } from 'react-redux';
import SnackbarComponent from './snackbar';

import SnackbarOperations from './redux/operations';
import SnackbarActions from './redux/actions';
import SnackbarReducer from './redux/reducer';

const mapStateToProps = ({ snackbar }) => ({
  snackbarList: snackbar.snackbarList,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: (id) => dispatch(SnackbarOperations.dismissSnackbar(id)),
});

export {
  SnackbarOperations, SnackbarActions, SnackbarReducer,
};

export const Snackbar = connect(mapStateToProps, mapDispatchToProps)(SnackbarComponent);
