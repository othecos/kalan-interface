// SIGN UP
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
// SIGN IN
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_ERROR = "SIGNIN_ERROR";

// SIGN OUT
export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
export const SIGNOUT_ERROR = "SIGNOUT_ERROR";

import firebase from "src/config/firebase";
// Signing up with Firebase
export const signup = (email, password) => async dispatch => {
  try {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(dataBeforeEmail => {
        firebase.auth().onAuthStateChanged(function(user) {
          user.sendEmailVerification();
        });
      })
      .then(dataAfterEmail => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user.emailVerified) {
            // Email is verified
            dispatch({
              type: SIGNUP_SUCCESS,
              payload:
                "Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox."
            });
          } else {
            // Email is not verified
            dispatch({
              type: SIGNUP_ERROR,
              payload:
                "Something went wrong, we couldn't create your account. Please try again."
            });
          }
        });
      })
      .catch(function(error) {
        dispatch({
          type: SIGNUP_ERROR,
          payload:
            "Something went wrong, we couldn't create your account. Please try again."
        });
      });
  } catch (err) {
    dispatch({
      type: SIGNUP_ERROR,
      payload:
        "Something went wrong, we couldn't create your account. Please try again."
    });
  }
};
// Signing in with Firebase
export const signin = (email, password, callback) => async dispatch => {
  try {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: SIGNIN_SUCCESS });
        callback();
      })
      .catch(() => {
        dispatch({
          type: SIGNIN_ERROR,
          payload: "Invalid login credentials"
        });
      });
  } catch (err) {
    dispatch({ type: SIGNIN_ERROR, payload: "Invalid login credentials" });
  }
};

// Signing out with Firebase
export const signout = () => async dispatch => {
  try {
    firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: SIGNOUT_SUCCESS });
    })
    .catch(() => {
      dispatch({ 
        type: SIGNOUT_ERROR, 
        payload: "...some error message for the user..."
      });
    });
  } catch (err) {
    dispatch({ 
      type: SIGNOUT_ERROR, 
      payload: "...some error message for the user..."
    });
  }
};

// Reset password with Firebase
export const resetPassword = email => async dispatch => {
  try {
    firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => 
      dispatch({
        type: RESET_SUCCESS,
        payload: "Reset email sent. Go check your inbox."
      })
    )
    .catch(err => {
      dispatch({
        type: RESET_ERROR,
        payload: "...some message for the user..."
      });
    });
  } catch (err) {
    dispatch({ 
      type: RESET_ERROR, 
      payload: "...some message for the user..." 
    });
  }
};
