/* eslint-disable no-param-reassign */
import _ from 'lodash';
import logger from 'utils/logger';

export const applyProperty = (obj, propertyName, value, isNullable = false) => {
  if (!_.isObject(obj)) return obj;
  if (!Object.prototype.hasOwnProperty.call(obj, propertyName)) {
    logger.error(`applyProperty: attempt to change property "${propertyName}", which does not exist in object`);
    return obj;
  }

  const newObj = { ...obj };
  if (!isNullable) {
    newObj[propertyName] = value ?? '';
  } else {
    newObj[propertyName] = value;
  }

  return newObj;
};

export const copyProperties = (obj, copyObj) => {
  if (!_.isObject(obj) || !_.isObject(copyObj)) return obj;

  const properties = Object.getOwnPropertyNames(copyObj);

  const newObj = { ...obj };

  properties.forEach((p) => {
    if (!Object.hasOwnProperty.call(obj, p) || !Object.hasOwnProperty.call(copyObj, p)) {
      logger.error(`copyProperties: attempt to change property "${p}", which does not exist in object`);
      return;
    }
    newObj[p] = copyObj[p] ?? newObj[p];
  });

  return newObj;
};
