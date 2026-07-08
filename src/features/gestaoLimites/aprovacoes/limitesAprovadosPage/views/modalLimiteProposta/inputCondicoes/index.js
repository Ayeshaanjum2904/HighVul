import { connect } from 'react-redux';

import InputTitulo from './inputCondicoes';

import operations from '../../../redux/operations';

const mapStateToProps = ({ limitesAprovados }) => ({
  status: limitesAprovados.limiteDetails.detalhes,
  condicao: limitesAprovados.limiteDetails.condicao,
  openPopper: limitesAprovados.limiteDetails.openPopperSave,
  isModified: limitesAprovados.isModified,
});

const mapDispatchToProps = (dispatch) => ({
  setCondicao: (idVersao, condicao) => dispatch(operations.setCondicao(idVersao, condicao)),
  enviarProposta: (idLimite, status) => dispatch(
    operations.updateLimiteCondicao(idLimite, status),
  ),
  updateCondicaoVersoes: (idLimite, idVersao) => dispatch(
    operations.updateCondicaoVersoes(idLimite, idVersao),
  ),
  setUpdateCondicao: (updateCondicao) => {
    dispatch(operations.setUpdateCondicao(updateCondicao));
  },
  setOpenPopper: (save) => {
    dispatch(operations.setOpenPopperSave(save));
  },
  setIsModified: (isModified) => {
    dispatch(operations.setIsModified(isModified));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(InputTitulo);
