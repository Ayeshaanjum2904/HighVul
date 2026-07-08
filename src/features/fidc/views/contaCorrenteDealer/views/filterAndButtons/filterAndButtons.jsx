import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import FilterButton from 'common/controls/buttonFilter';
import { MASK_CNPJ } from 'utils/masks';

import TextFilterMasked from 'common/controls/textFilterMasked/textFilterMasked';
import {
  FilterRow, Search, Apply, ExportButton, CadastrarButton,
} from './filterAndButtons.style';
import ModalCadastroConta from '../modalCadastroConta';

const FilterAndButtons = ({
  cnpj,
  setCnpj,
  isLoading,
  onFilter,
  onExport,
  isFilterSelected,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);

  return (
    <>
      <FilterRow>
        <Search className="cnpjFilter">
          <TextFilterMasked
            label="CNPJ"
            placeholder="Buscar CNPJ"
            value={cnpj}
            setValue={setCnpj}
            showSearchIcon
            disabled={isLoading}
            mask={MASK_CNPJ.mask}
            blocks={MASK_CNPJ.blocks}
            prepareChar={MASK_CNPJ.prepareChar}
          />
        </Search>
        <Apply className="buttonFilter">
          <FilterButton
            isFilterSelected={isFilterSelected}
            isLoading={isLoading}
            onClick={onFilter}
            textApply="Filtrar"
            textSelect="Filtrar"
          />
        </Apply>
        <ExportButton className="buttonExport">
          <Button onClick={onExport} disabled={isLoading}>
            Exportar Contas
          </Button>
        </ExportButton>
        <CadastrarButton className="buttonCadastrar">
          <Button onClick={handleOpenModal}>
            Cadastrar Conta
          </Button>
        </CadastrarButton>
      </FilterRow>
      {openModal && (
        <ModalCadastroConta
          setOpen={setOpenModal}
        />
      )}
    </>
  );
};

FilterAndButtons.propTypes = {
  cnpj: PropTypes.string,
  setCnpj: PropTypes.func,
  isLoading: PropTypes.bool,
  onFilter: PropTypes.func,
  onExport: PropTypes.func,
  isFilterSelected: PropTypes.bool,
};

FilterAndButtons.defaultProps = {
  cnpj: '',
  setCnpj: () => { },
  isLoading: false,
  isFilterSelected: false,
  onFilter: () => { },
  onExport: () => { },
};

export default FilterAndButtons;
