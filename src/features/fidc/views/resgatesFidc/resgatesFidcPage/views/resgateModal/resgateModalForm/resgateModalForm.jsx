import React from 'react';
import PropTypes from 'prop-types';
import List, { ListContent } from 'common/layout/list';
import { formatDate } from 'utils/format';
import AssuntoSection from './assuntoSection/assuntoSection';
import PeriodoSection from './periodoSection/periodoSection';
import { Content, Header, Value } from './resgateModalForm.style';

const renderSection = (
  title,
  value,
) => (
  <Content>
    <Header>
      {title}
    </Header>
    <Value>
      {value}
    </Value>
  </Content>
);

const ResgateModalForm = ({
  resgate,
  openCopy,
  form,
  setForm,
  dates,
}) => {
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    invalidDate,
    setInvalidDate,
    shouldBeNull,
  } = dates;

  return (
    <List>
      <ListContent>
        <AssuntoSection
          form={form}
          openCopy={openCopy}
          setForm={setForm}
        />
        <PeriodoSection
          dates={{
            startDate,
            endDate,
            shouldBeNull,
            setStartDate,
            setEndDate,
            invalidDate,
            setInvalidDate,
          }}
          openCopy={openCopy}
        />
        {renderSection('3. Usuário que criou o registro:', resgate?.usuario)}
        {renderSection('4. Data/Hora do recebimento do arquivo:', formatDate(resgate?.dataRecebimentoArquivo, 'DD/MM/YYYY - HH:mm'))}
      </ListContent>
    </List>
  );
};

ResgateModalForm.propTypes = {
  form: PropTypes.shape({
    titulo: PropTypes.string,
    textoMensagem: PropTypes.string,
  }),
  dates: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    setStartDate: PropTypes.func,
    setEndDate: PropTypes.func,
    invalidDate: PropTypes.bool,
    setInvalidDate: PropTypes.func,
    shouldBeNull: PropTypes.bool,
  }),
  setForm: PropTypes.func,
  resgate: PropTypes.object,
  openCopy: PropTypes.bool,
};

ResgateModalForm.defaultProps = {
  form: {
    titulo: null,
    textoMensagem: null,
  },
  dates: PropTypes.shape({
    startDate: '',
    endDate: '',
    invalidDate: false,
    shouldBeNull: false,
    setStartDate: () => {},
    setEndDate: () => {},
    setInvalidDate: () => {},
  }),
  setForm: () => {},
  resgate: {},
  openCopy: false,
};

export default ResgateModalForm;
