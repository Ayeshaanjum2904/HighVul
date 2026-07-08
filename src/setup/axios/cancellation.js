import axios from 'axios';

let cancelSource = axios.CancelToken.source();

export const getCancellationToken = () => (
  cancelSource.token
);

export const cancelAll = () => {
  cancelSource.cancel('Your cancellation message');
  cancelSource = axios.CancelToken.source();
};
