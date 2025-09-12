import React from "react";
//import { useNavigate } from "react-router-dom";

import {
  formatError,
  login,
  runLogoutTimer,
  saveTokenInLocalStorage,
  signUp,
} from "../../services/AuthService";

export const SIGNUP_CONFIRMED_ACTION = "[signup action] confirmed signup";
export const SIGNUP_FAILED_ACTION = "[signup action] failed signup";
export const LOGIN_CONFIRMED_ACTION = "[login action] confirmed login";
export const LOGIN_FAILED_ACTION = "[login action] failed login";
export const LOADING_TOGGLE_ACTION = "[Loading action] toggle loading";
export const LOGOUT_ACTION = "[Logout action] logout action";

// export function signupAction(email, password, navigate) {

//     return (dispatch) => {
//         signUp(email, password)
//         .then((response) => {
//             saveTokenInLocalStorage(response.data);
//             runLogoutTimer(
//                 dispatch,
//                 response.data.expiresIn * 1000,
//                 //history,
//             );
//             dispatch(confirmedSignupAction(response.data));
//             navigate('/dashboard');
// 			//history.push('/dashboard');
//         })
//         .catch((error) => {
//             const errorMessage = formatError(error.response.data);
//             dispatch(signupFailedAction(errorMessage));
//         });
//     };
// }

export function signupAction(username, email, password, navigate) {
    return (dispatch) => {
        console.log("Signup action triggered");

        signUp(username, email, password)
            .then((response) => {
                console.log("Signup response:", response);

                response.expiresIn = response.expiresIn || 3600; // Default expiresIn

                saveTokenInLocalStorage(response);

                runLogoutTimer(dispatch, response.expiresIn * 1000, navigate);

                dispatch(confirmedSignupAction(response));

                console.log("Navigating to dashboard");
                navigate("/dashboard");
            })
            .catch((error) => {
                console.error("Signup error:", error);
                const errorMessage = formatError(error.response ? error.response.data : error.message);
                dispatch(signupFailedAction(errorMessage));
            });
    };
}


export function Logout(navigate) {
  localStorage.removeItem("userDetails");
  localStorage.removeItem("token");
  navigate("/login");
  //history.push('/login');

  return {
    type: LOGOUT_ACTION,
  };
}

// export function loginAction(email, password, navigate) {
//     return (dispatch) => {
//          login(email, password)
//             .then((response) => {
//                 saveTokenInLocalStorage(response.data);
//                 runLogoutTimer(
//                     dispatch,
//                     response.data.expiresIn * 1000,
//                     navigate,
//                 );
//                dispatch(loginConfirmedAction(response.data));
// 			   //console.log('kk------1');
// 			   //console.log(kk);
// 			   //console.log(response.data);
// 			   //console.log('kk------2');
// 			   //return response.data;
// 				//return 'success';
// 				//history.push('/dashboard');
// 				navigate('/dashboard');
//             })
//             .catch((error) => {
// 				//console.log('error');
// 				//console.log(error);
//                 const errorMessage = formatError(error.response.data);
//                 dispatch(loginFailedAction(errorMessage));
//             });
//     };
// }

// export function loginFailedAction(data) {
//     return {
//         type: LOGIN_FAILED_ACTION,
//         payload: data,
//     };
// }

// export function loginConfirmedAction(data) {
//     return {
//         type: LOGIN_CONFIRMED_ACTION,
//         payload: data,
//     };
// }

export function loginAction(email, password, navigate) {
    return (dispatch) => {
        login(email, password)
            .then((response) => {
                response.expiresIn = response.expiresIn || 3600; // Default expiresIn
                saveTokenInLocalStorage(response);
                // console.log("Dispatching loginConfirmedAction with:", response);
                dispatch(loginConfirmedAction(response)); // This updates the Redux state
                navigate('/dashboard');
            })
            .catch((error) => {
                const errorMessage = formatError(error.response ? error.response.data : error.message);
                dispatch(loginFailedAction(errorMessage));
            });
    };
}


export function loginFailedAction(error) {
  return {
    type: LOGIN_FAILED_ACTION,
    payload: error, // Pass the error message to the reducer
  };
}

export function loginConfirmedAction(data) {
    // console.log("loginConfirmedAction called with payload:", data);
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: data, // Pass the entire response payload
    };
}


export function confirmedSignupAction(payload) {
  return {
    type: SIGNUP_CONFIRMED_ACTION,
    payload,
  };
}

export function signupFailedAction(message) {
  return {
    type: SIGNUP_FAILED_ACTION,
    payload: message,
  };
}

export function loadingToggleAction(status) {
  return {
    type: LOADING_TOGGLE_ACTION,
    payload: status,
  };
}
