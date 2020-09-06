import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppProvider from './AppProvider';
import { SnackbarProvider } from "notistack";
import Subscribe from './Subscribe';

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={2}
      disableWindowBlurListener
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
      <AppProvider >
        <Subscribe />
      </AppProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('facets-io-website')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
