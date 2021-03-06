import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from 'styles/global-styles';
import { theme } from "styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalFonts from "styles/fonts";
import { CookiesProvider } from 'react-cookie';
import { persistor, store } from 'store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import App from 'App';
import { AuthProvider } from 'hooks/useAuth';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CookiesProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <GlobalFonts />
            <GlobalStyles />
            <App />
          </ThemeProvider>
        </AuthProvider>
      </CookiesProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);