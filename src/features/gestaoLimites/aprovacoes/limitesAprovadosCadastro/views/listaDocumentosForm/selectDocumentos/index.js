import { connect } from 'react-redux';

import SelectDocumentos from './selectDocumentos';

const mapStateToProps = ({ limitesAprovadosCadastro }) => ({
  tipoDocumentos: limitesAprovadosCadastro.documento.documentoList,
  isLoadingTipoDocumentos: limitesAprovadosCadastro.documento.isLoading,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectDocumentos);
