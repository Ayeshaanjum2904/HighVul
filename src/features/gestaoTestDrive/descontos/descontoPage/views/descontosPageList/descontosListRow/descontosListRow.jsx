import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Trash2 } from 'react-feather';
import ButtonIcon from 'common/controls/buttonIcon';
import { camelFormat, formatDate } from 'utils/format';

import { trackedProperties } from 'modules';
import './descontosListRow.scss';
import AlertModal from 'common/layout/alertModal';

const DescontosListRow = ({
  desconto, setUpdatePage, setDescontoId, deleteDesconto,
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
    setDescontoId(desconto.id);
  };
  return (
    <div className="descontos-page__list-row__container__outer">
      <div
        className="descontos-page__list-row__container"
        onClick={() => setUpdatePage(desconto.id, desconto.marca)}
        role="row"
        tabIndex={0}
      >
        <div className="descontos-page__list-row__item descontos-page__list-row__marca">
          {camelFormat(desconto?.marca, 2)}
        </div>
        <div className="descontos-page__list-row__item descontos-page__list-row__produto">
          {camelFormat(desconto?.produto)}
        </div>
        <div className="descontos-page__list-row__item descontos-page__list-row__inicio-vigencia">
          {formatDate(desconto?.vigenciaInicio, 'DD/MM/yyyy')}
        </div>
        <div className="descontos-page__list-row__item descontos-page__list-row__fim-vigencia">
          {formatDate(desconto?.vigenciaFim, 'DD/MM/yyyy')}
        </div>
        <div className="descontos-page__list-row__item descontos-page__list-row__dve">
          {desconto?.dveMkt}
        </div>
        <div
          className="descontos-page__list-row__item descontos-page__list-row__delete-button"
          onClick={(event) => event.stopPropagation()}
          role="row"
          tabIndex={0}
        >
          <ButtonIcon
            mixpanelPage={trackedProperties.descontosPage}
            mixpanelTarget="Delete desconto"
            onClick={handleOpenDeleteModal}
          >
            <Trash2 size="20px" />
          </ButtonIcon>
        </div>
      </div>
      <AlertModal
        buttonAction={() => deleteDesconto()}
        title="Deseja excluir essa DVE?"
        subtitle="Ao excluir essa DVE todos os descontos cadastrados na mesma serão excluídos."
        textRedButton="Excluir DVE"
        openModal={openDeleteModal}
        setOpen={setOpenDeleteModal}
      />
    </div>
  );
};

DescontosListRow.propTypes = {
  desconto: PropTypes.object,
  setUpdatePage: PropTypes.func,
  setDescontoId: PropTypes.func,
  deleteDesconto: PropTypes.func,
};

DescontosListRow.defaultProps = {
  desconto: null,
  setUpdatePage: () => {},
  setDescontoId: () => {},
  deleteDesconto: () => {},
};

export default DescontosListRow;
