import React from 'react';
import PropTypes from 'prop-types';
import DateSelector from 'common/controls/dateSelector/dateSelector';
import { CircularProgress } from '@material-ui/core';
import moment from 'moment';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import SelectMultiAction from 'common/controls/selectMultiAction/selectMultiAction';
import { Row, Item, LoadingContainer } from './relatorioFidcFilters.style';
import { useRelatorioContext } from '../../context/relatorio';
import { useDashboardState } from '../../context/dashboard';

const dictConcessionarias = {
  singular: 'concessionária',
  plural: 'concessionárias',
  type: 'a',
};

const dictRegionais = {
  singular: 'regional',
  plural: 'regionais',
  type: 'a',
};

const dictBrands = {
  singular: 'brand',
  plural: 'brands',
  type: 'a',
};

const RelatorioFidcFilters = ({
  refs,
}) => {
  const {
    entradaRef, vencimentoRef,
  } = refs;

  const [
    {
      relatorioDataInicioEntrada,
      relatorioDataFimEntrada,
      relatorioDataInicioVencimento,
      relatorioDataFimVencimento,
      relatorioInvalidEntradaDate,
      relatorioInvalidVencimentoDate,
      selectedRelatorioConcessionarias,
      selectedRelatorioRegionais,
      selectedRelatorioBrand,
    },
    {
      setRelatorioDataInicioEntrada,
      setRelatorioDataFimEntrada,
      setRelatorioDataInicioVencimento,
      setRelatorioDataFimVencimento,
      setRelatorioInvalidEntradaDate,
      setRelatorioInvalidVencimentoDate,
      setSelectedRelatorioConcessionarias,
      setSelectedRelatorioRegionais,
      setSelectedRelatorioBrand,
    },
  ] = useRelatorioContext();

  const {
    concessionariasList,
    regionaisList,
    brandsList,
    filtrosLoading,
  } = useDashboardState();

  const minDate = moment('2023-06-01');

  return (
    <Row>
      <Item>
        <DateSelector
          dataCy="filter-data-entrada"
          title="Data de entrada no FIDC"
          startDate={relatorioDataInicioEntrada}
          endDate={relatorioDataFimEntrada}
          setStartDate={setRelatorioDataInicioEntrada}
          setEndDate={setRelatorioDataFimEntrada}
          numberOfMonths={2}
          invalidDateProp={relatorioInvalidEntradaDate}
          setInvalidDate={setRelatorioInvalidEntradaDate}
          minDate={minDate}
          isDayBlocked={(day) => day.isBefore(minDate)}
          ref={entradaRef}
          positionFixed
        />
      </Item>
      <Item>
        <DateSelector
          dataCy="filter-data-vencimento"
          title="Data de vencimento"
          startDate={relatorioDataInicioVencimento}
          endDate={relatorioDataFimVencimento}
          setStartDate={setRelatorioDataInicioVencimento}
          setEndDate={setRelatorioDataFimVencimento}
          numberOfMonths={2}
          invalidDateProp={relatorioInvalidVencimentoDate}
          setInvalidDate={setRelatorioInvalidVencimentoDate}
          minDate={minDate}
          isDayBlocked={(day) => day.isBefore(minDate)}
          ref={vencimentoRef}
        />
      </Item>
      <Item>
        {
          !filtrosLoading
            ? (
              <NewMultipleSelectComponent
                options={concessionariasList}
                setOption={setSelectedRelatorioConcessionarias}
                selectedOption={selectedRelatorioConcessionarias}
                label="Concessionária"
                dictionary={dictConcessionarias}
                dataCy="filter-concessionarias"
                minWidth={200}
              />
            )
            : (
              <LoadingContainer>
                <CircularProgress color="inherit" size="18px" />
              </LoadingContainer>
            )
          }
      </Item>
      <Item>
        {
        !filtrosLoading
          ? (
            <NewMultipleSelectComponent
              options={regionaisList}
              setOption={setSelectedRelatorioRegionais}
              selectedOption={selectedRelatorioRegionais}
              label="Regional"
              dictionary={dictRegionais}
              dataCy="filter-regionais"
              minWidth={200}
            />
          )
          : (
            <LoadingContainer>
              <CircularProgress color="inherit" size="18px" />
            </LoadingContainer>
          )
        }
      </Item>
      <Item>
        {
        !filtrosLoading
          ? (
            <SelectMultiAction
              items={brandsList}
              value={selectedRelatorioBrand}
              onChange={setSelectedRelatorioBrand}
              width={200}
              label="Brands"
              dictionary={dictBrands}
              disableCreate
              disableDelete
            />
          )
          : (
            <LoadingContainer>
              <CircularProgress color="inherit" size="18px" />
            </LoadingContainer>
          )
        }
      </Item>
    </Row>
  );
};

RelatorioFidcFilters.propTypes = {
  refs: PropTypes.object,
};

RelatorioFidcFilters.defaultProps = {
  refs: {
    entradaRef: null,
    vencimentoRef: null,
    concessionariasRef: null,
    regionaisRef: null,
  },
};

export default RelatorioFidcFilters;
