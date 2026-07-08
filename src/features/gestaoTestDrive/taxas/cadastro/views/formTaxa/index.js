import { connect } from 'react-redux';

import FormTaxa from './formTaxa';

const mapStateToProps = ({ taxas }) => ({
  showAlerta: taxas?.cadastro?.showAlerta,
  showDeleteButton: taxas?.cadastro?.showDeleteButton,
  taxasCadastradas: taxas?.cadastro?.taxasCadastradas,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FormTaxa);
