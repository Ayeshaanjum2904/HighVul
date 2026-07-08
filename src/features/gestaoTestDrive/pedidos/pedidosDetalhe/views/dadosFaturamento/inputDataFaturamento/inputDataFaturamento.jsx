import React from 'react';
import PropTypes from 'prop-types';
import InputSingleDatePicker from 'common/controls/inputSingleDatePicker';
import { formatDate } from 'utils/format';
import './inputDataFaturamento.scss';

const InputDataFaturamento = ({
  dataFaturamento, updateDetalheProperty, camposEditaveis, status,
}) => {
  const renderDataFaturamento = () => {
    const newDataFaturamento = dataFaturamento.split('T');
    return (
      <div className="dataFaturamento__container">
        <span className="dataFaturamento__container__span">
          Data Faturamento
        </span>
        <div className="dataFaturamento__container__data">
          <span>{formatDate(newDataFaturamento[0], 'DD/MM/YYYY')}</span>
        </div>
      </div>
    );
  };

  const statusReceive = 'pronto_para_faturamento';
  return (
    status === statusReceive
      ? (
        <InputSingleDatePicker
          title="Data Faturamento"
          value={dataFaturamento}
          isOutsideRange={() => false}
          onChange={(d) => {
            updateDetalheProperty(d);
          }}
          date={dataFaturamento}
          disabled={!camposEditaveis.includes('DataFaturamento')}
        />
      )
      : renderDataFaturamento()
  );
};

InputDataFaturamento.propTypes = {
  dataFaturamento: PropTypes.object,
  updateDetalheProperty: PropTypes.func,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
  status: PropTypes.string,
};

InputDataFaturamento.defaultProps = {
  updateDetalheProperty: () => {},
  dataFaturamento: null,
  camposEditaveis: null,
  status: '',
};

export default InputDataFaturamento;
