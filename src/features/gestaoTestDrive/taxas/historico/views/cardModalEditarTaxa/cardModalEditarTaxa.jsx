import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import colors from 'assets/styles/colors';
import CardModal from 'common/layout/cardModal';
import DateRangePicker from 'common/controls/dateRangePickerDialog';
import SelectBrandEditarTaxa from './selectBrandEditarTaxa';
import HeaderVigencia from './headerVigencia';
import TableEditarTaxa from './tableEditarTaxa';
import './cardModalEditarTaxa.scss';

const CardModalEditarTaxa = ({
  openEditarModal, setOpenEditarModal, clearForm,
  onSubmit, startDate, endDate, setStartDate, setEndDate,
}) => (
  <CardModal
    title="Editar Taxas"
    textGreenButton="Salvar taxas"
    textButton="Limpar Campos"
    actionFirstButton={clearForm}
    color="dark_gray_border"
    setOpen={setOpenEditarModal}
    openModal={openEditarModal}
    buttonAction={() => onSubmit()}
    alertTitle="Deseja sair do modo de edição das taxas?"
    alertSubtitle="Ao sair, lembre-se de salvar as informações. Caso contrário elas não serão salvas."
    colorIcon={colors.alert_color_300}
    buttonWidth="120px"
    closeButtonWidth="147px"
  >
    <div className="card-modal-editar-header">
      <DateRangePicker
        title="Período"
        startDate={moment(startDate)}
        endDate={moment(endDate)}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        numberOfMonths={2}
      />
      <SelectBrandEditarTaxa />
    </div>
    <HeaderVigencia />
    <TableEditarTaxa />
  </CardModal>
);

CardModalEditarTaxa.propTypes = {
  setOpenEditarModal: PropTypes.func,
  onSubmit: PropTypes.func,
  openEditarModal: PropTypes.bool,
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  clearForm: PropTypes.func,
};

CardModalEditarTaxa.defaultProps = {
  setOpenEditarModal: () => {},
  onSubmit: () => {},
  openEditarModal: false,
  setEndDate: () => {},
  setStartDate: PropTypes.func,
  startDate: null,
  endDate: null,
  clearForm: () => {},
};

export default CardModalEditarTaxa;
