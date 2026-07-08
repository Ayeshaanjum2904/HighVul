window.env = {
  REACT_APP_API_URL: 'https://localhost:44347',
};

global.console.error = (message) => {
  throw message;
};
