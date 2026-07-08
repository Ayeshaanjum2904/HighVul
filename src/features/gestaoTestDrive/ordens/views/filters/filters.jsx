import React from 'react';
import InputOrdem from './views/inputOrdem';
import SelectStatus from './views/selectStatus';
import SelectProduto from './views/selectProduto';
import SelectUsuario from './views/selectUsuario';
import {
  FiltersContainer,
  OrdemContainer,
  StatusContainer,
  ProdutoContainer,
  UsuarioContainer,
  SelectWrapper,
} from './filters.style';

const Filters = () => (
  <FiltersContainer>
    <OrdemContainer>
      <InputOrdem />
    </OrdemContainer>
    <StatusContainer>
      <SelectWrapper>
        <SelectStatus />
      </SelectWrapper>
    </StatusContainer>
    <ProdutoContainer>
      <SelectWrapper>
        <SelectProduto />
      </SelectWrapper>
    </ProdutoContainer>
    <UsuarioContainer>
      <SelectUsuario />
    </UsuarioContainer>
  </FiltersContainer>
);

export default Filters;
