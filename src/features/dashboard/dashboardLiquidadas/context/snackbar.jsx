/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
} from 'react';

import SnackbarList from 'common/snackbarList';
import PropTypes from 'prop-types';

const SnackbarStateContext = createContext(null);
const SnackbarActionsContext = createContext(null);

export function useSnackbarState() {
  const context = useContext(SnackbarStateContext);
  if (!context) throw new Error('SnackbarState can\'t be called outside context provider');
  return context;
}

export function useSnackbarActions() {
  const context = useContext(SnackbarActionsContext);
  if (!context) throw new Error('SnackbarActions can\'t be called outside context provider');

  return context;
}

export function useSnackbarContext() {
  return [useSnackbarState(), useSnackbarActions()];
}

export function SnackbarProvider({ children }) {
  const [snackbar, setSnackbar] = useState({ nextId: 0, list: [] });

  const addSnackbar = useCallback((message, type) => {
    setSnackbar((prevState) => ({
      nextId: prevState.nextId + 1,
      list: [...prevState.list, {
        id: prevState.nextId, message, type,
      }],
    }));
  }, []);

  const closeSnackbar = useCallback((id) => {
    setSnackbar((prevState) => ({
      ...prevState,
      list: prevState.list.filter((s) => s.id !== id),
    }));
  }, []);

  const state = {
    snackbar,
  };
  const actions = {
    addSnackbar,
    closeSnackbar,
  };

  return (
    <SnackbarActionsContext.Provider value={actions}>
      <SnackbarStateContext.Provider value={state}>
        <>
          {children}
          <SnackbarList
            snackbarErrors={snackbar.list}
            onClose={(id) => closeSnackbar(id)}
          />
        </>
      </SnackbarStateContext.Provider>
    </SnackbarActionsContext.Provider>
  );
}

SnackbarProvider.propTypes = {
  children: PropTypes.node,
};

SnackbarProvider.defaultProps = {
  children: null,
};
