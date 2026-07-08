import { connect } from 'react-redux';

import FormButtons from './formButtons';

const mapStateToProps = ({ cobrancas }) => ({
  isEditing: cobrancas.concessionarias.details.isDisabled,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FormButtons);
