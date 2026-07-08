import React from 'react';
import HeaderFilterStyle from './headerFilterStyle';
import ButtonFilterComunicado from './buttonFilterComunicado';
import CadastrarButton from '../cadastrarButton';
import BrandFilter from './brandFilter';
import PeriodoFilter from './periodoFilter';
import SearchFilter from './searchFilter';

const HeaderFilter = () => (
  <HeaderFilterStyle>
    <div className="header">
      <div className="search">
        <SearchFilter />
      </div>
      <div className="marca">
        <BrandFilter />
      </div>
      <div className="data-aprov">
        <PeriodoFilter />
      </div>
      <div className="botoes-filtro">
        <div className="botao-filtrar">
          <ButtonFilterComunicado />
        </div>
      </div>
      <div className="botao-criar-comunicado">
        <CadastrarButton />
      </div>
    </div>
  </HeaderFilterStyle>
);

export default HeaderFilter;
