import React from 'react';
import PropTypes from 'prop-types';
import DateSelector from 'common/controls/dateSelector/dateSelector';
import moment from 'moment';
import { ErrorLabel } from 'common/controls/textEditor/editor/editor.style';
import { Periodo } from './periodoSection.style';
import { Content, Header } from '../resgateModalForm.style';

const PeriodoSection = ({
  openCopy,
  dates,
}) => {
  const {
    startDate,
    endDate,
    shouldBeNull,
    setStartDate,
    setEndDate,
    invalidDate,
    setInvalidDate,
  } = dates;

  const dateSelectorNullable = startDate === null && endDate === null;
  return (
    <Content>
      <Header>
        2. Período em que essa mensagem ficará no ar:
      </Header>
      <Periodo>
        <DateSelector
          title="Período de Vigência*"
          initialStartDate={!shouldBeNull ? moment(startDate, 'YYYY-MM-DD') : null}
          initialEndDate={!shouldBeNull ? moment(endDate, 'YYYY-MM-DD') : null}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          invalidDateProp={invalidDate}
          setInvalidDate={setInvalidDate}
          numberOfMonths={2}
          isDayBlocked={(day) => day.isBefore(moment().startOf('day')) || day.isAfter(moment().add(60, 'days'))}
          shouldBeNull={shouldBeNull}
          dateSelectorNullable={dateSelectorNullable}
          disabled={!openCopy}
          openCopy={openCopy}
        />
        {(dateSelectorNullable && !shouldBeNull) && (
          <ErrorLabel>Informe um novo período de vigência</ErrorLabel>
        )}
      </Periodo>
    </Content>
  );
};

PeriodoSection.propTypes = {
  dates: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    shouldBeNull: PropTypes.bool,
    setStartDate: PropTypes.func,
    setEndDate: PropTypes.func,
    invalidDate: PropTypes.bool,
    setInvalidDate: PropTypes.func,
  }),
  openCopy: PropTypes.bool,
};

PeriodoSection.defaultProps = {
  dates: PropTypes.shape({
    startDate: '',
    endDate: '',
    shouldBeNull: false,
    invalidDate: false,
    setStartDate: () => {},
    setEndDate: () => {},
    setInvalidDate: () => {},
  }),
  openCopy: false,
};

export default PeriodoSection;
