import React from 'react';
import { BrowserRouter,HashRouter, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { create } from 'jss';
import rtl from 'jss-rtl';
import MomentUtils from '@date-io/moment';
import { SnackbarProvider } from 'notistack';
import {
  createStyles,
  jssPreset,
  makeStyles,
  StylesProvider,
  ThemeProvider
} from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import CookiesNotification from 'src/components/CookiesNotification';
import SettingsNotification from 'src/components/SettingsNotification';
import GoogleAnalytics from 'src/components/GoogleAnalytics';
import ScrollReset from 'src/components/ScrollReset';
import useSettings from 'src/hooks/useSettings';
import { createTheme } from 'src/theme';
import Routes from 'src/Routes';
import FirebaseAuth from './components/FirebaseAuth';

const history = createBrowserHistory();
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%'
    },
    body: {
      height: '100%',
      width: '100%'
    },
    '#root': {
      height: '100%',
      width: '100%'
    }
  }
}));

function App() {
  useStyles();

  const { settings } = useSettings();
  console.log({
    NODE_ENV: process.env,
    BASE_URL: process.env.REACT_APP_BASE_URL,
    PORT: process.env.REACT_APP_PORT,
    PATH: process.env.REACT_APP_PATH
  });
  return (
    <ThemeProvider theme={createTheme(settings)}>
      <StylesProvider jss={jss}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <SnackbarProvider maxSnack={1}>
          <HashRouter basename={'/'}>
              <FirebaseAuth>
                <ScrollReset />
                <GoogleAnalytics />
                <CookiesNotification />
                <Routes />
              </FirebaseAuth>
            </HashRouter>
          </SnackbarProvider>
        </MuiPickersUtilsProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
