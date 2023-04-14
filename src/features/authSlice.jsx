import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    isAdmin: false,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      (state.loading = true), (state.error = false);
    },
    loginSuccess: (state, { payload }) => {
      (state.loading = false), (state.currentUser = payload?.user?.username);
    },
  },
});

export default authSlice.reducer;
