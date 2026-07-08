import logger from 'utils/logger';
import _ from 'lodash';
import actions from '../actions/actions';
import service from '../service';

import { TypeErrors } from '../../../../../redux/enums';

const validateEmail = (email = null, index = null) => async (dispatch, getState) => {
  try {
    dispatch(actions.validateEmailStart(index));

    const { contato, contatoInfo } = getState().cobrancas.contatos.modal;
    const contatoEmail = index !== null ? email : contatoInfo.email;
    const emailBody = { id: null, email: contatoEmail, idContato: contato.id };
    const result = await service.validateEmail(emailBody);

    if (!result.success && !_.isEmpty(result.errors)) {
      const listErrors = result.errors.map(((e) => ({ ...e, index })));
      dispatch(actions.validateEmailError(listErrors));
      return;
    }

    if (contato.emailList.some((e) => e.email === contatoEmail)) {
      const error = [{
        type: TypeErrors.duplicateKey,
        propertyName: 'Email',
        message: 'Email já cadastrado',
        index,
      }];
      dispatch(actions.validateEmailError(error));
      return;
    }

    if (index !== null) {
      dispatch(actions.setEmailList(emailBody, index));
      return;
    }

    dispatch(actions.validateEmailSuccess(emailBody));
  } catch (e) {
    logger.error(e);
    dispatch(actions.validateEmailError([]));
  }
};

const deleteEmail = (email) => async (dispatch) => {
  dispatch(actions.deleteEmail(email));
};

const setEmail = (email) => async (dispatch) => {
  dispatch(actions.setEmail(email));
};

const setEmailList = (email, index) => async (dispatch) => {
  dispatch(actions.setEmail(email, index));
};

const validateTelefone = (telefone = null, index = null) => async (dispatch, getState) => {
  try {
    dispatch(actions.validateTelefoneStart());

    const { contato, contatoInfo } = getState().cobrancas.contatos.modal;
    const contatoTelefone = index !== null ? telefone : contatoInfo.telefone;
    const contatoRamal = index !== null ? contato.telefoneList[index].ramal : contatoInfo.ramal;

    const telefoneBody = {
      id: null,
      telefone: contatoTelefone,
      ramal: contatoRamal ?? '',
      idContato: contato.id,
    };
    const result = await service.validateTelefone(telefoneBody);

    if (!result.success && !_.isEmpty(result.errors)) {
      const listErrors = result.errors.map(((e) => ({ ...e, index })));
      dispatch(actions.validateTelefoneError(listErrors));
      return;
    }

    if (contato.telefoneList.some((e) => e.telefone === contatoTelefone
                                      && e.ramal === (contatoRamal ?? ''))) {
      const error = [{
        type: TypeErrors.duplicateKey,
        propertyName: 'Telefone',
        message: 'Telefone já cadastrado',
        index,
      }];
      dispatch(actions.validateTelefoneError(error));
      return;
    }

    if (index !== null) {
      dispatch(actions.setTelefoneList(telefoneBody, index));
      return;
    }

    dispatch(actions.validateTelefoneSuccess(telefoneBody));
  } catch (e) {
    logger.error(e);
    dispatch(actions.validateTelefoneError([]));
  }
};

const deleteTelefone = (telefone) => async (dispatch) => {
  const fullTelefone = `${telefone.telefone}${telefone.ramal ?? ''}`;
  dispatch(actions.deleteTelefone(fullTelefone));
};

const setTelefone = (telefone) => async (dispatch) => {
  dispatch(actions.setTelefone(telefone));
};

const setRamal = (ramal) => async (dispatch) => {
  dispatch(actions.setRamal(ramal));
};

const setRamalList = (ramal, index) => async (dispatch) => {
  dispatch(actions.setRamalList(ramal, index));
};

export default {
  validateEmail,
  deleteEmail,
  setEmail,
  validateTelefone,
  deleteTelefone,
  setTelefone,
  setRamal,
  setEmailList,
  setRamalList,
};
