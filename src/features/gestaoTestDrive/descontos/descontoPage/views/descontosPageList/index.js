/* eslint-disable object-property-newline */
import { connect } from 'react-redux';

import DescontosPageList from './descontosPageList';
import operations from '../../redux/operations';

const mapStateToProps = ({ descontos }) => ({
  isLoading: descontos.page.list.isLoading,
  isError: descontos.page.list.isError,
  descontos: descontos.page.list.descontos,
});

const mapDispatchToProps = (dispatch) => ({
  setUpdatePage: (descontoId, marca) => dispatch(operations.setUpdatePage(descontoId, marca)),
  setDuplicatePage: (descontoId, marca) => dispatch(operations.setDuplicatePage(descontoId, marca)),
  disableDesconto: (descontoId) => dispatch(operations.disableDesconto(descontoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DescontosPageList);
