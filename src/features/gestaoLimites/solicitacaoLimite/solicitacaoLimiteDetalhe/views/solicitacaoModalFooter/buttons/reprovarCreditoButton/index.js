import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import ReprovarCreditoButton from './reprovarCreditoButton';

const mapStateToProps = ({ limites }) => ({
  action: limites.details.updateStatus?.action,
  isLoading: limites.details.updateStatus?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  reprovar: (action) => { dispatch(operations.reprovar(action)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReprovarCreditoButton);
