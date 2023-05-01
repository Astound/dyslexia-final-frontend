import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const userSlice = createSlice({
  name: "userId",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setUserId } = userSlice.actions;
export default userSlice.reducer;
