import { createSlice, current } from "@reduxjs/toolkit";

const DateTime = new Date();
const getHours = DateTime.getHours();
const getDate = DateTime.getDate();
const getMonth=DateTime.getMonth()

export const userData = createSlice({
  name: "userS",
  initialState: {
    user: [
      {
        username: "لهراسبی",
        password: "1092",
        namePersonal: "0211010",
        TimeActive: getHours,
        TimeDate: `${getDate} / ${getMonth}`,
      },
      {
        username: "مرتضی",
        password: "9333",
        namePersonal: "0421530",
        TimeActive: getHours,
        TimeDate: `${getDate} / ${getMonth}`,
      },
    ],
    accept: false,
    notAccept: false,
    nameUserLoginNow: "",
  },
  reducers: {
    findUser: (state, action) => {
      const inputUserType = action.payload;
      // console.log("in reducer inputUserType is :", inputUserType);
      // console.log("state.user is :", current(state.user));
      const fined = current(state.user).find(
        (item) =>
          item.username === inputUserType.username &&
          item.password === inputUserType.password
      );
      // console.log("in reducer fined is:", fined)
      if (fined) {
        state.accept = true;
        state.nameUserLoginNow = fined;
      } else {
        state.notAccept = true;
      }
    },
  },
});

export const { findUser } = userData.actions;
export default userData.reducer;
