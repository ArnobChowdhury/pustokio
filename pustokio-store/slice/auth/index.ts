import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  accessToken: string | null;
  userId: string | null;
  expirationDate: number;
  error: { message: string; status: number } | null;
  loading: boolean;
  authRedirectPath: string | null;
  authCheckingState: boolean;
  forgotPassMsg: string | null;
  forgotPassLoading: boolean;
  forgotPassErr: { message: string; status: number } | null;
  resetPassMsg: string | null;
  resetPassLoading: boolean;
  resetPassErr: { message: string; status: number } | null;
}

export const initialState: AuthState = {
  accessToken: null,
  userId: null,
  expirationDate: 0,
  error: null,
  loading: false,
  authCheckingState: true,
  authRedirectPath: null,
  forgotPassLoading: false,
  forgotPassMsg: null,
  forgotPassErr: null,
  resetPassLoading: false,
  resetPassMsg: null,
  resetPassErr: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authSuccess: (state, action) => {
      const { accessToken, userId, expirationDate } = action.payload;

      state.accessToken = accessToken;
      state.userId = userId;
      state.expirationDate = expirationDate;
      state.loading = false;
      state.error = null;
    },
    authStart: (state, _action) => {
      state.loading = true;
      state.error = null;
    },
    authTokenRefresh(state, action) {
      const { accessToken, expirationDate } = action.payload;
      state.accessToken = accessToken;
      state.expirationDate = expirationDate;
    },
    authFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
    authRedirectStart(state, action) {
      state.authRedirectPath = action.payload.authRedirectPath;
    },
    authRedirectSuccess(state, _action) {
      state.authRedirectPath = null;
    },
    authLogout(state, _action) {
      state.authRedirectPath = "/";
      state.authCheckingState = false;
    },
    authErrorRefresh(state, _action) {
      state.error = null;
    },
    authForgotPassStart(state, _action) {
      state.forgotPassLoading = true;
    },
    authForgotPassSuccess(state, action) {
      state.forgotPassLoading = false;
      state.forgotPassMsg = action.payload.forgotPassMsg;
    },
    authForgotPassFail(state, action) {
      state.forgotPassLoading = false;
      state.forgotPassErr = action.payload.forgotPassErr;
    },
    authResetPassStart(state, _action) {
      state.resetPassLoading = true;
    },
    authResetPassSuccess(state, action) {
      state.resetPassLoading = false;
      state.resetPassMsg = action.payload.resetPassMsg;
    },
    authResetPassFail(state, action) {
      state.resetPassLoading = false;
      state.resetPassErr = action.payload.resetPassErr;
    },
    authCheckingStateEnd(state, _action) {
      state.authCheckingState = false;
    },
  },
});

export const { authSuccess } = authSlice.actions;
export default authSlice.reducer;
