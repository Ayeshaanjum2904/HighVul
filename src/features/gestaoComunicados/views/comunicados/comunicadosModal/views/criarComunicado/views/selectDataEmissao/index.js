import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import SelectDataEmissao from './selectDataEmissao';

const mapStateToProps = ({ comunicados }) => ({
  dataEmissao: comunicados.comunicados.modal.dataEmissao,
});

const mapDispatchToProps = (dispatch) => ({
  setDataEmissao: (dataEmissao) => dispatch(operations.setDataEmissao(dataEmissao)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectDataEmissao);
