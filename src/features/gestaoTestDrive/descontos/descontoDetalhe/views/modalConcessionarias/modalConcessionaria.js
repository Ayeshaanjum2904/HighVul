import { connect } from 'react-redux';

import ItemSelectorModal from 'common/layout/itemSelectorModal/itemSelectorModal';

import operations from '../../redux/operations';

const mapStateToProps = ({ descontos }) => ({
  itemsList: descontos.details.concessionariasList,
  selectedItems: descontos.details.concessionariasSelecionadas,
  baseClassName: 'descontosPage',
  itemType: 'concessionarias',
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(operations.setModalConcessionariaOpen(false)),
  onSelectItem:
  (concessionarias) => dispatch(operations.setSelectedConcessionarias(concessionarias)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemSelectorModal);
