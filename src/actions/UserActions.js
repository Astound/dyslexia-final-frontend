export const SetUserIdAction = (id) => (dispatch, getState) => {
  const {
    User: { userId },
  } = getState();
  dispatch({
    type: "SET_USER_ID",
    payload: id,
  });
};
