import _ from 'lodash';

const compareIgnoringCase = (s1, s2) => {
  if (!_.isString(s1) || !_.isString(s2)) return null;

  return s1.toLower() === s2.toLower();
};

const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

export default {
  compareIgnoringCase,
  validateEmail,
};
