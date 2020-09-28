import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-quill/dist/quill.snow.css';
import 'nprogress/nprogress.css';
import 'src/assets/css/prism.css';
import 'src/mixins/chartjs';
import 'src/mixins/prismjs';
import 'src/mock';
import { enableES5 } from 'immer';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from 'src/serviceWorker';
import { SettingsProvider } from 'src/context/SettingsContext';
import { configureStore } from 'src/store';
import { restoreSettings } from 'src/utils/settings';
import firebase from 'src/config/firebase'
import App from 'src/App';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore' // <- needed if using firestore

enableES5();



const store = configureStore();
const settings = restoreSettings();

const fbConfig = {} // object containing Firebase config
const rrfConfig = {
   userProfile: 'profiles' ,
   useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  } // react-redux-firebase config


const rrfProps = {
  firebase,
  config: rrfConfig,
  fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <SettingsProvider settings={settings}>
      <App />
    </SettingsProvider>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
