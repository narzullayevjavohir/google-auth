import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: localStorage.getItem("fullName"),
  email: localStorage.getItem("email"),
  imgUrl: localStorage.getItem("profilePic"),
};

const AuthGoogle = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getName: (state, action) => {
      state.fullName = action.payload;
    },
    getEmail: (state, action) => {
      state.email = action.payload;
    },
    getImg: (state, action) => {
      state.imgUrl = action.payload;
    },
  },
});

export default AuthGoogle.reducer;

export const { getName, getEmail, getImg } = AuthGoogle.actions;
