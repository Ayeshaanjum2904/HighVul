import { connect } from 'react-redux';

import * as operations from '../../redux/operations';

import SelectData from './selectData';

const mapStateToProps = ({ ofertas }) => ({
  data: ofertas.search.data,
  isLoading: ofertas?.ofertas?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(operations.setData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectData);
