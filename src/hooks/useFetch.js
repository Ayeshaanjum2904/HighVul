import { useEffect, useReducer, useCallback } from 'react';

export const initialState = {
  loading: false,
  success: false,
  error: null,
  data: [],
};

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case 'start':
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
        data: [],
      };
    case 'failed':
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error,
        data: [],
      };
    case 'success':
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        data: action.data,
      };
    default: return state;
  }
};

export default function useCustomFetch(
  functionFetch,
  dependencies = [],
  autoFetch = true,
  callback = null,
) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const doFetch = useCallback(async () => {
    dispatch({ type: 'start' });

    try {
      const data = await functionFetch();
      dispatch({ type: 'success', data });
      callback?.(true, data);
    } catch (err) {
      dispatch({ type: 'failed', error: err });
      callback?.(false, err);
    }
  }, [functionFetch]);

  useEffect(() => {
    if (autoFetch) {
      doFetch();
    }
  // eslint-disable-next-line
  }, dependencies);

  return [state, doFetch];
}
