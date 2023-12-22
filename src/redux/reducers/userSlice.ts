import { InitialState } from './../../interfaces/initialState.interface';
import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialState = {
  isAuth: false,
  userData: {},
  loading: true,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    isAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setUserData, setLoading, setError, isAuth } = userSlice.actions;
export default userSlice.reducer;