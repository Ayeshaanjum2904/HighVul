import { connect } from 'react-redux';

import ItemSelectorModal from 'common/layout/itemSelectorModal/itemSelectorModal';

import operations from '../../redux/operations';

const mapStateToProps = ({ condicoesComerciais }) => ({
  itemsList: condicoesComerciais.details.concessionariasList,
  selectedItems: condicoesComerciais.details.concessionariasSelecionadas,
  baseClassName: 'condicoesPage',
  itemType: 'concessionarias',
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(operations.setModalConcessionariaOpen(false)),
  onSelectItem:
  (concessionarias) => dispatch(operations.setSelectedConcessionarias(concessionarias)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemSelectorModal);
