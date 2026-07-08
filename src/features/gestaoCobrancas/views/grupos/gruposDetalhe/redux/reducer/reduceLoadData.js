import actions from '../actions/actions';

export const applyToLoader = (dataLoaders, id, transform) => dataLoaders
  .map((loader) => {
    if (loader.id !== id) return loader;
    return transform(loader);
  });

export const reduceLoadData = (state, action) => {
  switch (action.type) {
    case actions.types.ADD_LOADER:
      return {
        ...state,
        dataLoader: [...state.dataLoader, action.payload.loader],
      };
    case actions.types.UPDATE_LOADER:
      return {
        ...state,
        dataLoader: applyToLoader(
          state.dataLoader,
          action.payload.id,
          (l) => ({
            ...l,
            loadOp: action.payload.loadOp,
            isError: false,
            isLoading: false,
            isReady: false,
          }),
        ),
      };
    case actions.types.LOADER_START:
      return {
        ...state,
        dataLoader: applyToLoader(
          state.dataLoader,
          action.payload.id,
          (l) => ({
            ...l,
            isError: false,
            isLoading: true,
            isReady: false,
          }),
        ),
      };
    case actions.types.LOADER_ERROR:
      return {
        ...state,
        dataLoader: applyToLoader(
          state.dataLoader,
          action.payload.id,
          (l) => ({
            ...l,
            isError: true,
            isLoading: false,
            isReady: false,
          }),
        ),
      };
    case actions.types.LOADER_SUCCESS:
      return {
        ...state,
        dataLoader: applyToLoader(
          state.dataLoader,
          action.payload.id,
          (l) => ({
            ...l,
            isError: false,
            isLoading: false,
            isReady: true,
          }),
        ),
      };
    default:
      return state;
  }
};
