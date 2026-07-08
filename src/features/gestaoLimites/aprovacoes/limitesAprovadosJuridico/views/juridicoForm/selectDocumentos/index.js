import { connect } from 'react-redux';

import SelectDocumentos from './selectDocumentos';

const mapStateToProps = ({ limitesAprovadosJuridico }) => ({
  tipoDocumentos: limitesAprovadosJuridico.documento.documentoList,
  isLoadingTipoDocumentos: limitesAprovadosJuridico.documento.isLoading,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectDocumentos);
