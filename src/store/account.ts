import { createSlice } from "@reduxjs/toolkit";

interface AccountState {
  isLoggedIn: boolean;
}
const initialState: AccountState = {
  isLoggedIn: true,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { login } = accountSlice.actions;
export default accountSlice.reducer;
