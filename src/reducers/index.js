import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import accountReducer from './accountReducer';
import notificationsReducer from './notificationsReducer';
import chatReducer from './chatReducer';
import mailReducer from './mailReducer';
import kanbanReducer from './kanbanReducer';
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore' // <- needed if using firestore
import analysisReducer from './analysisReducer';


const rootReducer = combineReducers({

  account: accountReducer,
  notifications: notificationsReducer,
  analysis: analysisReducer,
  chat: chatReducer,
  mail: mailReducer,
  kanban: kanbanReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
  form: formReducer
});

export default rootReducer;
