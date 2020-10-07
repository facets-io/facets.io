import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppProvider from './AppProvider';
import { SnackbarProvider } from "notistack";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Policy from './Policy';
import IframeWrapper from './IframeWrapper';


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
        <Router>
          <Switch>
            <Route path="/privacy-policy">
              <Policy />
            </Route>
            <Route path="/">
              <IframeWrapper />
            </Route>
          </Switch>
        </Router>
      </AppProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('facets-io-website')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
