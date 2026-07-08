/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  useContext,
  useState,
} from 'react';

import PropTypes from 'prop-types';
import useCustomFetch from 'hooks/useFetch';
import { useSnackbarActions } from './snackbar';
import relatorioFidcService from '../services/relatorioFidcService';

const RelatorioStateContext = createContext(null);
const RelatorioActionsContext = createContext(null);

export function useRelatorioState() {
  const context = useContext(RelatorioStateContext);
  if (!context) throw new Error('RelatorioState can\'t be called outside context provider');
  return context;
}

export function useRelatorioActions() {
  const context = useContext(RelatorioActionsContext);
  if (!context) throw new Error('RelatorioActions can\'t be called outside context provider');

  return context;
}

export function useRelatorioContext() {
  return [useRelatorioState(), useRelatorioActions()];
}

export function RelatorioProvider({ children }) {
  const [relatorioDataInicioEntrada, setRelatorioDataInicioEntrada] = useState(null);
  const [relatorioDataFimEntrada, setRelatorioDataFimEntrada] = useState(null);
  const [relatorioDataInicioVencimento, setRelatorioDataInicioVencimento] = useState(null);
  const [relatorioDataFimVencimento, setRelatorioDataFimVencimento] = useState(null);
  const [relatorioInvalidEntradaDate, setRelatorioInvalidEntradaDate] = useState(false);
  const [relatorioInvalidVencimentoDate, setRelatorioInvalidVencimentoDate] = useState(false);

  const [selectedRelatorioConcessionarias, setSelectedRelatorioConcessionarias] = useState([]);
  const [selectedRelatorioRegionais, setSelectedRelatorioRegionais] = useState([]);
  const [selectedRelatorioBrand, setSelectedRelatorioBrand] = useState('');
  const [selectedRelatorioStatus, setSelectedRelatorioStatus] = useState('all');
  const [openDialog, setOpenDialog] = useState(false);

  const { addSnackbar } = useSnackbarActions();

  const [{
    loading,
  }, exportRelatorio] = useCustomFetch(
    () => relatorioFidcService.exportRelatorioDuplicatas({
      dataInicioEntrada: relatorioDataInicioEntrada,
      dataFimEntrada: relatorioDataFimEntrada,
      dataInicioVencimento: relatorioDataInicioVencimento,
      dataFimVencimento: relatorioDataFimVencimento,
      concessionarias: selectedRelatorioConcessionarias,
      regionais: selectedRelatorioRegionais,
      brand: selectedRelatorioBrand,
      status: selectedRelatorioStatus,
    }),
    [
      relatorioDataInicioEntrada,
      relatorioDataFimEntrada,
      relatorioDataInicioVencimento,
      relatorioDataFimVencimento,
      selectedRelatorioConcessionarias,
      selectedRelatorioRegionais,
      selectedRelatorioBrand,
      selectedRelatorioStatus,
    ],
    false,
    (success) => {
      if (success) {
        setOpenDialog(true);
      } else {
        addSnackbar('Erro ao fazer download', 'error');
      }
    },
  );

  const state = {
    relatorioDataInicioEntrada,
    relatorioDataFimEntrada,
    relatorioDataInicioVencimento,
    relatorioDataFimVencimento,
    relatorioInvalidEntradaDate,
    relatorioInvalidVencimentoDate,
    selectedRelatorioConcessionarias,
    selectedRelatorioRegionais,
    selectedRelatorioBrand,
    selectedRelatorioStatus,
    loading,
    openDialog,
  };

  const actions = {
    setRelatorioDataInicioEntrada,
    setRelatorioDataFimEntrada,
    setRelatorioDataInicioVencimento,
    setRelatorioDataFimVencimento,
    setRelatorioInvalidEntradaDate,
    setRelatorioInvalidVencimentoDate,
    setSelectedRelatorioConcessionarias,
    setSelectedRelatorioRegionais,
    setSelectedRelatorioBrand,
    setSelectedRelatorioStatus,
    exportRelatorio,
    setOpenDialog,
  };

  return (
    <RelatorioActionsContext.Provider value={actions}>
      <RelatorioStateContext.Provider value={state}>
        {children}
      </RelatorioStateContext.Provider>
    </RelatorioActionsContext.Provider>
  );
}

RelatorioProvider.propTypes = {
  children: PropTypes.node,
};

RelatorioProvider.defaultProps = {
  children: null,
};
