import { connect } from 'react-redux';

import operations from '../../../../redux/operations';
import selector from '../../../../redux/selector';

import SelectData from './selectDataInicio';

const mapStateToProps = ({ descontos }) => ({
  data: selector.dataInicio(descontos),
  isError: selector.isValidDate(descontos),
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(operations.setDataInicio(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectData);
