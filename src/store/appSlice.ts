import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  userType: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserType: (state, action) => {
      state.userType = action.payload.userType;
    },
  },
});

export const { setUserType } = appSlice.actions;
export default appSlice.reducer;
