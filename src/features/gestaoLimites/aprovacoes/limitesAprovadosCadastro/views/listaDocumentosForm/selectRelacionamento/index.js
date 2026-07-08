import { connect } from 'react-redux';

import SelectRelacionamento from './selectRelacionamento';

const mapStateToProps = ({ limitesAprovadosCadastro }) => ({
  tipoRelacionamentos: limitesAprovadosCadastro.relacionamento.relacionamentoList,
  isLoadingTipoRelacionamento: limitesAprovadosCadastro.relacionamento.isLoading,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRelacionamento);
