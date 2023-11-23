"use client";
const { createSlice } = require("@reduxjs/toolkit");
let initialState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  // cart:[{courseName:"",price:""}]
};
const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});
export const { updateField } = userSlice.actions;

export const userActions = userSlice.actions;
export default userSlice.reducer;
