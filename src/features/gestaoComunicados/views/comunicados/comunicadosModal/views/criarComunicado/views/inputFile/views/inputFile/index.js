import { connect } from 'react-redux';

import InputFile from './inputFile';

const mapStateToProps = ({ comunicados }) => ({
  urlFile: comunicados.comunicados.modal?.urlFile,
  fileName: comunicados.comunicados.modal?.fileName,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(InputFile);
