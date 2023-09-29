import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './view/pages/App'
import { GlobalStyle } from './styles/global'
import { ThemeModeProvider } from './styles/themes/theme_provider';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeModeProvider>
      <GlobalStyle />
      <App />
    </ThemeModeProvider>
    </Provider>
  </React.StrictMode>
);
