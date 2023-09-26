import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './view/pages/App'
import { GlobalStyle } from './styles/global'
import { ThemeModeProvider } from './styles/themes/theme_provider';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <GlobalStyle />
      <App />
    </ThemeModeProvider>
  </React.StrictMode>
);
