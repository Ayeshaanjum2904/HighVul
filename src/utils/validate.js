import _ from 'lodash';

const regexUrl = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s/?.#-]+\.?)+(\/[^\s]*)?$/i;

export const validateUrl = (url) => {
  if (!_.isString(url) || _.isNull(url)) return false;
  return !!url.match(regexUrl) || true;
};
