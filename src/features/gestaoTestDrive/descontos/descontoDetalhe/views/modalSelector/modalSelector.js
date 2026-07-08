import { connect } from 'react-redux';

import ItemSelectorModal from 'common/layout/itemSelectorModal/itemSelectorModal';

import operations from '../../redux/operations';

const mapStateToProps = ({ descontos }) => ({
  itemsList: descontos.details.mvsList,
  selectedItems: descontos.details.desconto.descontos,
  baseClassName: 'descontosPage',
  itemType: 'veiculos',
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(operations.setModalOpen(false)),
  onSelectItem: (mvs) => dispatch(operations.setSelectedMvs(mvs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemSelectorModal);
