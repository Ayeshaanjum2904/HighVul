import React from 'react';
import PropTypes from 'prop-types';
import { camelFormat } from 'utils/format';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Mixpanel, trackedProperties } from 'modules';
import './contatosListRow.scss';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';

const ContatosListRow = ({
  contato, openModalEdit, openModalDelete,
}) => {
  const nomeContato = camelFormat(contato?.nome);
  const grupos = Array.isArray(contato?.grupoList) ? contato?.grupoList : [];
  const disableSummary = grupos?.length < 2;

  const renderButtons = () => (
    <>
      <div className="contatos__list-row__item contatos__list-row__editar">
        <IconButtonTooltip
          tooltip="Editar"
          onClick={() => {
            openModalEdit(contato);
            Mixpanel.trackButtonClick('Editar Contato', trackedProperties.contatosPage);
          }}
        >
          <EditIcon />
        </IconButtonTooltip>
      </div>
      <div className="contatos__list-row__item contatos__list-row__deletar">
        <IconButtonTooltip
          tooltip="Excluir"
          onClick={() => openModalDelete(contato?.id)}
        >
          <DeleteIcon />
        </IconButtonTooltip>
      </div>
    </>
  );

  const renderGroupLines = () => grupos.slice(1).map((g, i) => (
    <div key={i} className="contatos__list-row-external__container">
      <div className="contatos__list-row__item contatos__list-row__nome" />
      <div className="contatos__list-row__item contatos__list-row__papel" />
      <div className="contatos__list-row__item contatos__list-row__grupo">
        <div className="contatos__list-row__item contatos__list-row__grupo" title={g?.grupo}>
          <div className="contatos__list-row__grupo__inner">
            {g?.grupo}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="contatos__list-row-external">
      <div className="line">
        <details id="details-contato" onClick={(e) => (disableSummary ? e.preventDefault() : null)}>
          <summary id="summary-contato" disabled={disableSummary}>
            <div className="contatos__list-row-external__container">
              <div className="contatos__list-row__item contatos__list-row__nome">
                <div className="contatos__list-row__nome__inner" title={nomeContato}>
                  {nomeContato}
                </div>
              </div>
              <div className="contatos__list-row__item contatos__list-row__papel">
                <div title={contato?.papel.descricao}>
                  {contato?.papel.descricao}
                </div>
              </div>
              <div className="contatos__list-row__item contatos__list-row__grupo">
                <div className="contatos__list-row__grupo__inner" title={grupos[0]?.grupo}>
                  {grupos[0]?.grupo}
                </div>
              </div>
              {renderButtons()}
            </div>
          </summary>
          <div>
            {renderGroupLines()}
          </div>
        </details>
      </div>
    </div>
  );
};

ContatosListRow.propTypes = {
  contato: PropTypes.object,
  openModalEdit: PropTypes.func,
  openModalDelete: PropTypes.func,
};

ContatosListRow.defaultProps = {
  contato: null,
  openModalEdit: () => {},
  openModalDelete: () => {},
};

export default ContatosListRow;
