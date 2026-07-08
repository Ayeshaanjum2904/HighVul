import { connect } from 'react-redux';

import { setStatus } from '../../redux/operations';
import SelectStatus from './selectStatusOfertas';

const mapStateToProps = ({ ofertas }) => ({
  status: ofertas.search.status,
  isLoading: ofertas?.ofertas?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setStatus: (status) => {
    dispatch(setStatus(status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectStatus);
