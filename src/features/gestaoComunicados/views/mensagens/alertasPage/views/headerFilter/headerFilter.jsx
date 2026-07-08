import React from 'react';
import HeaderFilterStyle from './headerFilterStyle';
import ButtonFilterAlerta from './buttonFilterAlerta';
import CreateAlertaButton from '../createAlertaButton';
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
          <ButtonFilterAlerta />
        </div>
      </div>
      <div className="botao-criar-alerta">
        <CreateAlertaButton />
      </div>
    </div>
  </HeaderFilterStyle>
);

export default HeaderFilter;
