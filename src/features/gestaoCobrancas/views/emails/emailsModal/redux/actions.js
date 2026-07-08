const PREFIX = 'emailsModal';

const SET_TEMPLATE_EMAIL = `${PREFIX}/SET_TEMPLATE_EMAIL`;

const RESET_STORE = `${PREFIX}/RESET_STORE`;
const SET_MODAL_OPEN = `${PREFIX}/SET_MODAL_OPEN`;

const SET_MODAL_TEMPLATE = `${PREFIX}/SET_MODAL_TEMPLATE`;

const UPDATE_EMAIL_PROPERTY = `${PREFIX}/UPDATE_EMAIL_PROPERTY`;

const UPDATE_START = `${PREFIX}/UPDATE_START`;

const UPDATE_ERROR = `${PREFIX}/UPDATE_ERROR`;

const updateStart = () => ({
  type: UPDATE_START,
});

const updateError = () => ({
  type: UPDATE_ERROR,
});

const setModal = (status) => ({
  type: SET_MODAL_OPEN,
  payload: { status },
});

const setTemplate = (template) => ({
  type: SET_TEMPLATE_EMAIL,
  payload: { template },
});

const resetStore = () => ({ type: RESET_STORE });

const setModalTemplate = (template) => ({
  type: SET_MODAL_TEMPLATE,
  payload: { template },
});

const updateEmailProperty = (propertyName, property) => ({
  type: UPDATE_EMAIL_PROPERTY,
  payload: { propertyName, property },
});

export default {
  types: {
    RESET_STORE,
    SET_MODAL_OPEN,
    SET_TEMPLATE_EMAIL,
    SET_MODAL_TEMPLATE,
    UPDATE_EMAIL_PROPERTY,
    UPDATE_ERROR,
    UPDATE_START,
  },

  resetStore,
  setModal,
  setTemplate,
  setModalTemplate,
  updateEmailProperty,
  updateError,
  updateStart,
};
