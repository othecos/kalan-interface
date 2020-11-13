import { useFirebase } from "react-redux-firebase";
import firebase from "src/config/firebase";
// SIGN UP
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
// SIGN IN
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_ERROR = "SIGNIN_ERROR";
// SIGN IN
export const SILENT_LOGIN = "SILENT_LOGIN";

// SIGN OUT
export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
export const SIGNOUT_ERROR = "SIGNOUT_ERROR";

// SIGN OUT
export const RESET_SUCCESS = "RESET_SUCCESS";
export const RESET_ERROR = "RESET_ERROR";

// Signing up with Firebase
export function signUp(values, firebase) {
  return async (dispatch) => {
    try {
      let user = await firebase.createUser(
        { email: values.email, password: values.password },
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email
        }
      )
      dispatch({
        type: SIGNUP_SUCCESS,
        payload:
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email
        }
      });
    } catch (error) {
      dispatch({
        type: SIGNUP_ERROR,
        payload:
          "Something went wrong, we couldn't create your account. Please try again."
      });
      throw error
    }
  }
};
// Signing in with Firebase
export const signInWithEmail = (email, password, firebase) => {
  return async (dispatch) => {
    try {
      let result = await firebase.login({
        email,
        password,
      })
      console.log(result.user.user.toJSON());
      dispatch({ type: SIGNIN_SUCCESS });
      return
    } catch (error) {
      dispatch({ type: SIGNIN_ERROR, payload: "Invalid login credentials" });
      throw error
    }
  }
};
// Signing in with Firebase
export const signInWithGoogle = (firebase, callback) => {
  return async (dispatch) => {
    try {
      await firebase.login({ provider: 'google', type: 'popup' })
      dispatch({ type: SIGNIN_SUCCESS });
      callback();
    } catch (error) {
      dispatch({ type: SIGNIN_ERROR, payload: "Invalid login credentials" });
      throw error
    }
  }
};

export const setUserData = (user) => {
  return (dispatch) => dispatch({
    type: SILENT_LOGIN,
    payload: {
      user
    }
  });
}

// Signing out with Firebase
export const signOut = (firebase) => {
  return async dispatch => {
    try {
      await firebase.logout()
      dispatch({
        type: SIGNOUT_SUCCESS, payload: {
          user: null
        }
      });
    } catch (error) {
      dispatch({
        type: SIGNOUT_ERROR,
        payload: "...some error message for the user?..."
      });
      throw error
    }
  }
};

// Reset password with Firebase
export const resetPassword = (email) => {
  return async (dispatch) => {
    try {
      await firebase.auth().sendPasswordResetEmail(email)
      dispatch({
        type: RESET_SUCCESS,
        payload: "Reset email sent. Go check your inbox."
      })
    } catch (error) {
      dispatch({
        type: RESET_ERROR,
        payload: "...some message for the user?..."
      });
      throw error
    }
  }
};
