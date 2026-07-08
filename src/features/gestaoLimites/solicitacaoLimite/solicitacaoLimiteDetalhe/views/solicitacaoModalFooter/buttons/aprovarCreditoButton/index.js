import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import AprovarCreditoButton from './aprovarCreditoButton';

const mapStateToProps = ({ limites }) => ({
  action: limites.details.updateStatus?.action,
  isLoading: limites.details.updateStatus?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  aprovarStatus: (action) => { dispatch(operations.aprovarStatus(action)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AprovarCreditoButton);
