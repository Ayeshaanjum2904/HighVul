import { connect } from 'react-redux';

import operations from '../../../../redux/operations';
import selector from '../../../../redux/selector';

import SelectData from './selectDataFim';

const mapStateToProps = ({ condicoesComerciais }) => ({
  data: selector.dataFim(condicoesComerciais),
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(operations.setDataFim(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectData);
