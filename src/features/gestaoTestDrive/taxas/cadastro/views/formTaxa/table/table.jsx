import React from 'react';
import PropTypes from 'prop-types';
import './table.scss';
import InsertTaxaModule from 'common/controls/insertTaxaModule/insertTaxaModule';
import HeaderTable from './headerTable';

const Table = ({
  brand, disabled, setInputData, inputData, taxa,
}) => {
  const renderInsertModule = (propName, titleName, disable, data) => (
    <InsertTaxaModule
      propName={propName}
      titleName={titleName}
      setInputData={setInputData}
      inputData={data}
      disabled={disable}
    />
  );
  const renderTable = () => {
    if (!disabled) {
      return (
        brand === 'Fiat'
          ? (
            <>
              {renderInsertModule('novoFloorPlan', 'Floor Plan', disabled, inputData)}
              {renderInsertModule('usadosFloorPlan', 'Floor Plan', disabled, inputData)}
              {renderInsertModule('pecas', '', disabled, inputData)}
              {renderInsertModule('identidadeVisual', '', disabled, inputData)}
              {renderInsertModule('novoFundao', 'Fundo', disabled, inputData)}
              {renderInsertModule('usadosFundao', 'Fundo', disabled, inputData)}
            </>
          )
          : (
            <>
              {renderInsertModule('novoFloorPlan', 'Floor Plan', disabled, inputData)}
              {renderInsertModule('usadosFloorPlan', 'Floor Plan', disabled, inputData)}
              {renderInsertModule('pecas', '', disabled, inputData)}
              {renderInsertModule('identidadeVisual', '', disabled, inputData)}
            </>
          )
      );
    }

    return (
      taxa.brand === 'Fiat'
        ? (
          <>
            {renderInsertModule('novoFloorPlan', 'Floor Plan', disabled, taxa)}
            {renderInsertModule('usadosFloorPlan', 'Floor Plan', disabled, taxa)}
            {renderInsertModule('pecas', '', disabled, taxa)}
            {renderInsertModule('identidadeVisual', '', disabled, taxa)}
            {renderInsertModule('novoFundao', 'Fundo', disabled, taxa)}
            {renderInsertModule('usadosFundao', 'Fundo', disabled, taxa)}
          </>
        )
        : (
          <>
            {renderInsertModule('novoFloorPlan', 'Floor Plan', disabled, taxa)}
            {renderInsertModule('usadosFloorPlan', 'Floor Plan', disabled, taxa)}
            {renderInsertModule('pecas', '', disabled, taxa)}
            {renderInsertModule('identidadeVisual', '', disabled, taxa)}
          </>
        )
    );
  };
  return (
    <>
      <HeaderTable />
      <div className="table-cadastrar-taxa">
        {renderTable()}
      </div>
    </>
  );
};

Table.propTypes = {
  brand: PropTypes.string,
  disabled: PropTypes.bool,
  inputData: PropTypes.string,
  setInputData: PropTypes.func,
  taxa: PropTypes.object,
};

Table.defaultProps = {
  disabled: false,
  brand: '',
  inputData: '',
  setInputData: () => { },
  taxa: {},
};

export default Table;
