export const SetUserIdAction = (id) => (dispatch, getState) => {
  const {
    User: { token, userId, userDetails },
  } = getState();
  dispatch({
    type: "SET_USER_ID",
    payload: id,
  });
};

export const SetUserDetailsAction = (details) => (dispatch, getState) => {
  const {
    User: { token, userId, userDetails },
  } = getState();

  dispatch({
    type: "SET_USER_DETAILS",
    payload: details,
  });
};

export const SetUserTokenAction = (tokenReceived) => (dispatch, getState) => {
  const {
    User: { token, userId, userDetails },
  } = getState();
  dispatch({
    type: "SET_USER_TOKEN",
    payload: tokenReceived,
  });
};
