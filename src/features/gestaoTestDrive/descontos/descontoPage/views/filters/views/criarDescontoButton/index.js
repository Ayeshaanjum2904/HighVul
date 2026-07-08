import { connect } from 'react-redux';

import CriarDescontoButton from './criarDescontoButton';

import operations from '../../../../redux/operations';

import { Pages } from '../../../../../redux/enums';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  setPage: () => dispatch(operations.setPage(Pages.descontosCreate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CriarDescontoButton);
