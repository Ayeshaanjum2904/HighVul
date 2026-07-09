import _ from 'lodash';
import JSEncrypt from 'jsencrypt';
import crypto from 'crypto-browserify';
import cookies from 'react-cookies';
import { reactLocalStorage } from 'reactjs-localstorage';

const COOKIE_AUTH_TOKEN = 'token';
const COOKIE_AUTH_TOKEN_VALIDATE = 'token-validate';
const COOKIE_FIDIS_USER_ID = 'fidis-user-id';
const COOKIE_FIDIS_USER_EMAIL = 'fidis-user-email';
const COOKIE_FIDIS_USER_NAME = 'fidis-user-name';
const LS_FIDIS_USER = 'fidis-user';
const COOKIE_FIDIS_USER_PERMISSIONS = 'fidis-user-permissions';

const clearAll = () => {
  reactLocalStorage.remove(COOKIE_AUTH_TOKEN);
  reactLocalStorage.remove(COOKIE_AUTH_TOKEN_VALIDATE);

  reactLocalStorage.remove(LS_FIDIS_USER);
  cookies.remove(COOKIE_FIDIS_USER_ID);
  cookies.remove(COOKIE_FIDIS_USER_NAME);
  cookies.remove(COOKIE_FIDIS_USER_EMAIL);
  cookies.remove(COOKIE_FIDIS_USER_PERMISSIONS);
};

const saveLoginInfo = (user, token) => {
  clearAll();

  reactLocalStorage.setObject(COOKIE_AUTH_TOKEN, token);
  reactLocalStorage.setObject(COOKIE_AUTH_TOKEN_VALIDATE, new Date().getTime());

  reactLocalStorage.setObject(LS_FIDIS_USER, user);
  cookies.save(COOKIE_FIDIS_USER_ID, user.id, { secure: true });
  cookies.save(COOKIE_FIDIS_USER_NAME, user.name, { secure: true });
  cookies.save(COOKIE_FIDIS_USER_EMAIL, user.email, { secure: true });
};

const publicKey = process.env.PUBLIC_KEY;

const key = process.env.AES_KEY;
const iv = process.env.AES_IV;

const encryptInAES = (body) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  let encrypted = cipher.update(JSON.stringify(body), 'utf-8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
};

const getEncryptedBody = (body) => {
  if (!body) {
    return null;
  }
  let firstEncrypted = encryptInAES(body);
  firstEncrypted = firstEncrypted.match(/.{1,214}/g);
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  const encryptedBody = firstEncrypted.map((code) => encrypt.encrypt(code));
  return { encryptedBody };
};

const savePermissionsInfo = (permissions) => {
  cookies.save(COOKIE_FIDIS_USER_PERMISSIONS, permissions, { secure: true });
};

const isAuthenticated = () => (Boolean(cookies.load('token')));

const getToken = () => (
  // console.log(`auth token: ${cookies.load(COOKIE_AUTH_TOKEN)}`);
  reactLocalStorage.getObject(COOKIE_AUTH_TOKEN, null, true)
);

const getPermissions = () => (
  cookies.load(COOKIE_FIDIS_USER_PERMISSIONS)
);

const getCurrentUser = () => (
  reactLocalStorage.getObject(LS_FIDIS_USER)
);

const getCurrentUserId = () => (
  parseInt(cookies.load(COOKIE_FIDIS_USER_ID), 10)
);

const getCurrentUserEmail = () => (
  cookies.load(COOKIE_FIDIS_USER_EMAIL)
);

const setToken = (token) => {
  reactLocalStorage.setObject(COOKIE_AUTH_TOKEN, token);
};

const setNextValidationDate = (date) => {
  if (!_.isDate(date)) {
    throw new Error('setNextValidationDate: argument error, expected a date object');
  }

  reactLocalStorage.setObject(COOKIE_AUTH_TOKEN_VALIDATE, date.getTime());
};

const getNextValidationDate = () => {
  const savedTime = reactLocalStorage.getObject(COOKIE_AUTH_TOKEN_VALIDATE);
  if (!savedTime) return undefined;

  const res = new Date();
  res.setTime(savedTime);
  return res;
};

const shouldRefreshToken = () => {
  const nextValidationDate = getNextValidationDate();
  if (!nextValidationDate) return false;

  const timeToNextValidation = nextValidationDate.getTime() - new Date().getTime();
  return (timeToNextValidation < 5 * 60 * 1000) && cookies.load('REFRESHING_TOKEN') !== '1';
};

const ExecuteTokenRefresh = (refreshFn) => {
  cookies.save('REFRESHING_TOKEN', '1', { maxAge: 60, secure: true });
  setTimeout(async () => {
    refreshFn();
    cookies.remove('REFRESHING_TOKEN');
  }, 1000);
};

export const AuthStorage = {
  clearAll,
  saveLoginInfo,
  savePermissionsInfo,
  isAuthenticated,
  getToken,
  getPermissions,
  getCurrentUser,
  getCurrentUserId,
  getCurrentUserEmail,
  setToken,
  setNextValidationDate,
  getNextValidationDate,
  getEncryptedBody,
  shouldRefreshToken,
  ExecuteTokenRefresh,
};