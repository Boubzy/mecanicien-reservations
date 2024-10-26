import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userInfo = null;
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userInfo');
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
