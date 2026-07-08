import PropTypes from 'prop-types';
import React from 'react';
import TextFilterDebounce from 'common/controls/textFilterDebounce/textFilterDebounce';
import DateSelector from 'common/controls/dateSelector/dateSelector';
import FilterButton from 'common/controls/buttonFilter';
import NewBasicSelect from 'common/controls/newBasicSelect/newBasicSelect';
import {
  Apply,
  BasicSelectContainer, ButtonContainer, Container, DateContainer, FilterRow, Search,
} from './resgateFilters.style';
import { compareFilters } from './helper';

const options = [
  { label: 'Ativo', value: 'Ativo' },
  { label: 'Inativo', value: 'Inativo' },
  { label: 'Finalizado', value: 'Finalizado' },
];

const ResgateFilters = ({
  filters,
  setFilter,
  loading,
  dates,
}) => {
  const {
    status,
    titulo,
    oldStatus,
    oldTitulo,
    oldStartDate,
    oldEndDate,
  } = filters;

  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    invalidDate,
    setInvalidDate,
  } = dates;

  const setFilters = (key, value) => {
    setFilter({
      ...filters,
      [key]: value,
    });
  };

  const { diff } = compareFilters(
    [status, titulo, startDate, endDate],
    [oldStatus, oldTitulo, oldStartDate, oldEndDate],
  );

  return (
    <Container>
      <FilterRow>
        <Search className="tituloMensagem">
          <TextFilterDebounce
            dataCy="FilterTitulo"
            placeholder="Buscar título da mensagem"
            value={titulo}
            setValue={(value) => setFilters('titulo', value)}
            showSearchIcon
            disabled={loading}
          />
        </Search>
        <DateContainer className="periodoVigencia">
          <DateSelector
            dataCy="FilterPeriodoVigencia"
            title="Período de Vigência"
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            invalidDateProp={invalidDate}
            setInvalidDate={setInvalidDate}
            numberOfMonths={2}
            disabled={loading}
          />
        </DateContainer>
        <BasicSelectContainer className="status">
          <NewBasicSelect
            options={options}
            setOption={(value) => setFilters('status', value)}
            selectedOption={status ?? 'all'}
            nameLabel="Status"
            dataCy="FilterStatus"
            labelAll="Todos os status"
            renderAllOptions
            isLoading={loading}
          />
        </BasicSelectContainer>
        <ButtonContainer className="buttonFilter">
          <Apply diff={diff}>
            <FilterButton
              dataCy="FilterApplyButton"
              textApply="Filtrar"
              textSelect="Filtrar"
              isLoading={loading}
              isFilterSelected={diff}
              onClick={() => setFilters('clickedFilter', true)}
            />
          </Apply>
        </ButtonContainer>
      </FilterRow>
    </Container>
  );
};

ResgateFilters.propTypes = {
  filters: PropTypes.shape({
    titulo: PropTypes.string,
    status: PropTypes.string,
    oldStatus: PropTypes.string,
    oldTitulo: PropTypes.string,
    oldStartDate: PropTypes.string,
    oldEndDate: PropTypes.string,
  }),
  dates: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    setStartDate: PropTypes.func,
    setEndDate: PropTypes.func,
    invalidDate: PropTypes.bool,
    setInvalidDate: PropTypes.func,
  }),
  loading: PropTypes.bool,
  setFilter: PropTypes.func,
};

ResgateFilters.defaultProps = {

  filters: {
    titulo: null,
    status: null,
    oldStatus: null,
    oldTitulo: null,
    oldStartDate: null,
    oldEndDate: null,
  },
  dates: {
    startDate: null,
    endDate: null,
    invalidDate: false,
    setStartDate: () => {},
    setEndDate: () => {},
    setInvalidDate: () => {},
  },
  loading: false,
  setFilter: () => {},

};

export default ResgateFilters;
