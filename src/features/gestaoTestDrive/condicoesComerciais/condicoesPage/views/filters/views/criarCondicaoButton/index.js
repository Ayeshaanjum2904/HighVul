import { connect } from 'react-redux';

import CriarDescontoButton from './criarCondicaoButton';

import Operations from '../../../../redux/operations';

import { Pages } from '../../../../../redux/enums';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  setPage: () => dispatch(Operations.setPage(Pages.condicoesCreate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CriarDescontoButton);
