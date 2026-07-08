/* eslint-disable no-console */
import _ from 'lodash';

const ifDevEnv = (fun) => {
  if (process.env.NODE_ENV === 'development' && _.isFunction(fun)) {
    fun();
  }
};

const info = (...params) => {
  ifDevEnv(() => {
    console.log(...params);
  });
};

const warn = (...params) => {
  ifDevEnv(() => {
    console.log(...params);
  });
};

const error = (...params) => {
  ifDevEnv(() => {
    console.error(...params);
  });
};

export default {
  info,
  warn,
  error,
};
