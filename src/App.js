import React from 'react';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material';

import Typography from 'assets/styles/typography';
import { Mixpanel, Snackbar } from 'modules';
import { setupAxios } from './setup/axios/axios';
import { setupHotjar } from './setup/hotjar';
import { StylesProviderV4, ThemeProviderV4, ThemeProviderV5 } from './setup/themes';
import store from './setup/store';

import { RenderIfLoggedIn } from './modules/auth/guards';

import SessionExpiredModal from './features/login/sessionExpiredModal';
import Routes from './routes';

import './App.scss';

function App() {
  setupAxios();
  setupHotjar();
  Mixpanel.init();
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
          <StylesProviderV4>
            <ThemeProviderV4>
              <ThemeProviderV5>
                <Routes />
                <Typography />
                <RenderIfLoggedIn>
                  <SessionExpiredModal />
                </RenderIfLoggedIn>
                <Snackbar />
              </ThemeProviderV5>
            </ThemeProviderV4>
          </StylesProviderV4>
        </Provider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
