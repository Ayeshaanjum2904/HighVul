import { connect } from 'react-redux';

import ItemSelectorModal from 'common/layout/itemSelectorModal/itemSelectorModal';

import operations from '../../redux/operations';

const mapStateToProps = ({ condicoesComerciais }) => ({
  itemsList: condicoesComerciais.details.mvsList,
  selectedItems: condicoesComerciais.details.condicao.condicoes,
  baseClassName: 'condicoesPage',
  itemType: 'veiculos',
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(operations.setModalOpen(false)),
  onSelectItem: (mvs) => dispatch(operations.setSelectedMvs(mvs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemSelectorModal);
