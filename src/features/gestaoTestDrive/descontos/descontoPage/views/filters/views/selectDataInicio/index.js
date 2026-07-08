import { connect } from 'react-redux';

import operations from '../../../../redux/operations';
import selector from '../../../../redux/selector';

import SelectData from './selectDataInicio';

const mapStateToProps = ({ descontos }) => ({
  data: selector.dataInicio(descontos),
  isLoading: descontos?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(operations.setFilter('dataInicio', data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectData);
