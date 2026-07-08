import React from 'react';
import PropTypes from 'prop-types';
import './tableEditarTaxa.scss';
import InsertTaxaModule from 'common/controls/insertTaxaModule/insertTaxaModule';
import HeaderTable from './headerTable';

const TableEditarTaxa = ({
  setInputData, inputData, brand,
}) => {
  const renderInsertModule = (propName, titleName) => (
    <InsertTaxaModule
      propName={propName}
      titleName={titleName}
      setInputData={setInputData}
      inputData={inputData}
    />
  );
  const renderTable = () => (
    brand === 'Fiat'
      ? (
        <>
          {renderInsertModule('novoFloorPlan', 'Floor Plan')}
          {renderInsertModule('usadosFloorPlan', 'Floor Plan')}
          {renderInsertModule('pecas')}
          {renderInsertModule('identidadeVisual')}
          {renderInsertModule('novoFundao', 'Fundo')}
          {renderInsertModule('usadosFundao', 'Fundo')}
        </>
      )
      : (
        <>
          {renderInsertModule('novoFloorPlan', 'Floor Plan')}
          {renderInsertModule('usadosFloorPlan', 'Floor Plan')}
          {renderInsertModule('pecas')}
          {renderInsertModule('identidadeVisual')}
        </>
      )

  );
  return (
    <>
      <HeaderTable />
      <div className="table-editar-taxa">
        {renderTable()}
      </div>
    </>
  );
};

TableEditarTaxa.propTypes = {
  inputData: PropTypes.string,
  brand: PropTypes.string,
  setInputData: PropTypes.func,
};

TableEditarTaxa.defaultProps = {
  inputData: '',
  brand: '',
  setInputData: () => { },
};

export default TableEditarTaxa;
