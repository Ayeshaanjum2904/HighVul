import { connect } from 'react-redux';

import ActionButton from './actionButton';

import operations from '../../redux/operations';
import operationsPage from '../../../descontoPage/redux/operations';
import selector from '../../redux/selector';
import { Pages } from '../../../redux/enums';

const mapStateToProps = ({ descontos }) => ({
  isLoading: descontos.details.isLoadingUpdate,
  page: descontos.page.page,
  disabled: selector.actionButtonDisabled(descontos),
});

const mapDispatchToProps = (dispatch) => ({
  updateDesconto: () => dispatch(operations.updateDesconto()),
  createDesconto: () => dispatch(operations.createDesconto()),
  onCancel: () => {
    dispatch(operations.resetStore());
    dispatch(operationsPage.setPage(Pages.descontosPage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionButton);
