import { connect } from 'react-redux';

import InputFile from './inputFile';

const mapStateToProps = ({ comunicados }) => ({
  urlFile: comunicados.comunicados.modal.urlFile,
});

export default connect(mapStateToProps, null)(InputFile);
