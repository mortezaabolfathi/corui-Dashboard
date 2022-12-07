import { createSlice, current } from "@reduxjs/toolkit";

export const userData = createSlice({
  name: "userS",
  initialState: {
    user: [
      {
        username: "لهراسبی",
        password: "1092",
      },
      { username: "مرتضی", password: "9333" },
    ],
    accept: false,
    notAccept:false,
    nameUserLoginNow:"",
  },
  reducers: {
    findUser: (state, action) => {
      const inputUserType = action.payload;
      // console.log("in reducer inputUserType is :", inputUserType);
      // console.log("state.user is :", current(state.user));
      const fined= current(state.user).find( (item) => item.username===inputUserType.username && item.password===inputUserType.password);
      // console.log("in reducer fined is:", fined)
      if(fined){
        state.accept=true
        state.nameUserLoginNow=fined.username
      }else{
        state.notAccept=true
      }
    },
  },
});

export const { findUser } = userData.actions;
export default userData.reducer;
