import React, {
  useRef,
} from 'react';

import ExpandPanel from 'common/layout/expandPanel/expandPanel';
import {
  Buttons, Filters,
} from './relatorioFidc.style';
import RelatorioFidcFilters from '../relatorioFidcFilters/relatorioFidcFilters';
import RelatorioFidcButtons from '../relatorioFidcButtons';
import { useRelatorioContext } from '../../context/relatorio';

const RelatorioFidc = () => {
  const [{ loading },
    {
      setRelatorioInvalidEntradaDate,
      setRelatorioInvalidVencimentoDate,
      setSelectedRelatorioStatus,
      setSelectedRelatorioRegionais,
      setSelectedRelatorioConcessionarias,
      setSelectedRelatorioBrand,
      exportRelatorio,
    },
  ] = useRelatorioContext();

  const entradaRef = useRef({});
  const vencimentoRef = useRef({});

  const resetFilters = () => {
    setRelatorioInvalidEntradaDate(false);
    setRelatorioInvalidVencimentoDate(false);
    entradaRef?.current?.resetDate();
    vencimentoRef?.current?.resetDate();
    setSelectedRelatorioRegionais([]);
    setSelectedRelatorioConcessionarias([]);
    setSelectedRelatorioBrand('');
    setSelectedRelatorioStatus('all');
  };

  return (
    <ExpandPanel
      title="Relatório"
      dataCy="relatorioFidcAccordion"
      minWidth="1035px"
    >
      <span>
        Insira os dados nos filtros abaixo e em seguida clique em exportar relatório:
      </span>
      <Filters>
        <RelatorioFidcFilters
          refs={{
            entradaRef,
            vencimentoRef,
          }}
        />
      </Filters>
      <Buttons>
        <RelatorioFidcButtons
          action={exportRelatorio}
          clear={resetFilters}
          loading={loading}
        />
      </Buttons>
    </ExpandPanel>
  );
};

RelatorioFidc.propTypes = {
};

RelatorioFidc.defaultProps = {
};

export default RelatorioFidc;
