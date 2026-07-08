import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import AprovarAplicacaoButton from './aprovarAplicacaoButton';

const mapStateToProps = ({ limites }) => ({
  action: limites.details.updateStatus?.action,
  isLoading: limites.details.updateStatus?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  aprovarStatus: (action) => { dispatch(operations.aprovarStatus(action)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AprovarAplicacaoButton);
