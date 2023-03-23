export const UserReducer = (state = { userId: null }, action) => {
  switch (action.type) {
    case "SET_USER_ID":
      return { userId: action.payload };
    default:
      return state;
  }
};
