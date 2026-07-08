import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import selector from '../../../redux/selectors';
import SelectData from './selectData';

const mapStateToProps = ({ cobrancas }) => ({
  data: selector.date(cobrancas),
  isLoading: cobrancas?.historico?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(operations.setFilter('date', data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectData);
