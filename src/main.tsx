import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { StateServiceProvider } from "./HOC/StateServiceProvider";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <StateServiceProvider >
    <App />
      </StateServiceProvider>
  </React.StrictMode>,
)
