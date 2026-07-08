import { connect } from 'react-redux';

import ActionButton from './actionButton';

import operations from '../../redux/operations';
import operationsPage from '../../../condicoesPage/redux/operations';
import selector from '../../redux/selector';
import { Pages } from '../../../redux/enums';

const mapStateToProps = ({ condicoesComerciais }) => ({
  isLoading: condicoesComerciais.details.isLoadingUpdate,
  page: condicoesComerciais.page.page,
  disabled: selector.actionButtonDisabled(condicoesComerciais),
});

const mapDispatchToProps = (dispatch) => ({
  updateCondicao: () => dispatch(operations.updateCondicao()),
  createCondicao: () => dispatch(operations.createCondicao()),
  onCancel: () => {
    dispatch(operations.resetStore());
    dispatch(operationsPage.setPage(Pages.condicoesPage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionButton);
