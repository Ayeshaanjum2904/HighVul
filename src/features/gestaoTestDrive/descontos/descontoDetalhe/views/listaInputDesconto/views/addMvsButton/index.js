import { connect } from 'react-redux';

import AddMvsButton from './addMvsButton';

import operations from '../../../../redux/operations';
import selector from '../../../../redux/selector';

const mapStateToProps = ({ descontos }) => ({
  disabled: selector.selectMvsDisabled(descontos),
  isLoading: descontos.details.isLoadingMvsList,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(operations.setModalOpen(true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMvsButton);
