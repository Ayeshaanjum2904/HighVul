const PREFIX_UPDATE_GRUPO = 'gruposDetalhe/UPDATE_GRUPO';
const UPDATE_GRUPO_START = `${PREFIX_UPDATE_GRUPO}/START`;
const UPDATE_GRUPO_SUCCESS = `${PREFIX_UPDATE_GRUPO}/SUCCESS`;
const UPDATE_GRUPO_ERROR = `${PREFIX_UPDATE_GRUPO}/ERROR`;
const UPDATE_GRUPO_PROPERTY = `${PREFIX_UPDATE_GRUPO}/PROPERTY`;
const SET_IS_EDITING = `${PREFIX_UPDATE_GRUPO}/SET_IS_EDITING`;

const updateGrupoStart = () => ({
  type: UPDATE_GRUPO_START,
});

const updateGrupoError = (errors) => ({
  type: UPDATE_GRUPO_ERROR,
  payload: { errors },
});

const updateGrupoSuccess = () => ({
  type: UPDATE_GRUPO_SUCCESS,
});

const updateGrupoProperty = (propertyName, value) => ({
  type: UPDATE_GRUPO_PROPERTY,
  payload: { propertyName, value },
});

const setIsEditing = (value) => ({
  type: SET_IS_EDITING,
  payload: { value },
});

export default {
  types: {
    PREFIX_UPDATE_GRUPO,
    UPDATE_GRUPO_START,
    UPDATE_GRUPO_SUCCESS,
    UPDATE_GRUPO_ERROR,
    UPDATE_GRUPO_PROPERTY,
    SET_IS_EDITING,
  },
  actions: {
    updateGrupoStart,
    updateGrupoError,
    updateGrupoSuccess,
    updateGrupoProperty,
    setIsEditing,
  },
};
