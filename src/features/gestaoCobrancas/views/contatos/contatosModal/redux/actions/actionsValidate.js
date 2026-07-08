const PREFIX_VALIDATE_EMAIL = 'contatosModal/VALIDATE_EMAIL';
const VALIDATE_EMAIL_START = `${PREFIX_VALIDATE_EMAIL}/START`;
const VALIDATE_EMAIL_SUCCESS = `${PREFIX_VALIDATE_EMAIL}/SUCCESS`;
const VALIDATE_EMAIL_ERROR = `${PREFIX_VALIDATE_EMAIL}/ERROR`;
const DELETE_EMAIL = `${PREFIX_VALIDATE_EMAIL}/DELETE_EMAIL`;
const SET_EMAIL = `${PREFIX_VALIDATE_EMAIL}/SET_EMAIL`;
const SET_EMAIL_LIST = `${PREFIX_VALIDATE_EMAIL}/SET_EMAIL_LIST`;

const PREFIX_VALIDATE_TELEFONE = 'contatosModal/VALIDATE_TELEFONE';
const VALIDATE_TELEFONE_START = `${PREFIX_VALIDATE_TELEFONE}/START`;
const VALIDATE_TELEFONE_SUCCESS = `${PREFIX_VALIDATE_TELEFONE}/SUCCESS`;
const VALIDATE_TELEFONE_ERROR = `${PREFIX_VALIDATE_TELEFONE}/ERROR`;
const DELETE_TELEFONE = `${PREFIX_VALIDATE_TELEFONE}/DELETE_TELEFONE`;
const SET_TELEFONE = `${PREFIX_VALIDATE_TELEFONE}/SET_TELEFONE`;
const SET_RAMAL = `${PREFIX_VALIDATE_TELEFONE}/SET_RAMAL`;
const SET_TELEFONE_LIST = `${PREFIX_VALIDATE_TELEFONE}/SET_TELEFONE_LIST`;
const SET_RAMAL_LIST = `${PREFIX_VALIDATE_TELEFONE}/SET_RAMAL_LIST`;

const validateEmailStart = (index) => ({
  type: VALIDATE_EMAIL_START,
  payload: { index },
});

const validateEmailError = (errors) => ({
  type: VALIDATE_EMAIL_ERROR,
  payload: { errors },
});

const validateEmailSuccess = (email) => ({
  type: VALIDATE_EMAIL_SUCCESS,
  payload: { email },
});

const deleteEmail = (email) => ({
  type: DELETE_EMAIL,
  payload: { email },
});

const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: { email },
});

const setEmailList = (email, index) => ({
  type: SET_EMAIL_LIST,
  payload: { email, index },
});

const validateTelefoneStart = () => ({
  type: VALIDATE_TELEFONE_START,
});

const validateTelefoneError = (errors) => ({
  type: VALIDATE_TELEFONE_ERROR,
  payload: { errors },
});

const validateTelefoneSuccess = (telefone) => ({
  type: VALIDATE_TELEFONE_SUCCESS,
  payload: { telefone },
});

const deleteTelefone = (telefone) => ({
  type: DELETE_TELEFONE,
  payload: { telefone },
});

const setTelefone = (telefone) => ({
  type: SET_TELEFONE,
  payload: { telefone },
});

const setRamal = (ramal) => ({
  type: SET_RAMAL,
  payload: { ramal },
});

const setTelefoneList = (telefone, index) => ({
  type: SET_TELEFONE_LIST,
  payload: { telefone, index },
});

const setRamalList = (ramal, index) => ({
  type: SET_RAMAL_LIST,
  payload: { ramal, index },
});

export default {
  types: {
    PREFIX_VALIDATE_EMAIL,
    VALIDATE_EMAIL_START,
    VALIDATE_EMAIL_SUCCESS,
    VALIDATE_EMAIL_ERROR,
    DELETE_EMAIL,
    SET_EMAIL,
    SET_EMAIL_LIST,

    PREFIX_VALIDATE_TELEFONE,
    VALIDATE_TELEFONE_START,
    VALIDATE_TELEFONE_SUCCESS,
    VALIDATE_TELEFONE_ERROR,
    DELETE_TELEFONE,
    SET_TELEFONE,
    SET_RAMAL,
    SET_TELEFONE_LIST,
    SET_RAMAL_LIST,

  },
  actions: {
    validateEmailError,
    validateEmailStart,
    validateEmailSuccess,
    deleteEmail,
    setEmail,
    setEmailList,

    validateTelefoneError,
    validateTelefoneStart,
    validateTelefoneSuccess,
    deleteTelefone,
    setTelefone,
    setRamal,
    setTelefoneList,
    setRamalList,

  },
};
