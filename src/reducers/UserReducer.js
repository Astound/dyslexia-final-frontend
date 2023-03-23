export const UserReducer = (
  state = { token: null, userId: null, userDetails: {} },
  action
) => {
  switch (action.type) {
    case "SET_USER_TOKEN":
      return { ...state, token: action.payload };
    case "SET_USER_ID":
      return { ...state, userId: action.payload };
    case "SET_USER_DETAILS":
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};
