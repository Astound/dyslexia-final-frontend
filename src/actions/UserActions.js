export const SetUserIdAction = (id) => (dispatch, getState) => {
  const {
    User: {},
  } = getState();
  dispatch({
    type: "SET_USER_ID",
    payload: id,
  });
};

export const SetUserTokenAction = (tokenReceived) => (dispatch, getState) => {
  const {
    User: {},
  } = getState();
  dispatch({
    type: "SET_USER_TOKEN",
    payload: tokenReceived,
  });
};

export const SetUserDetailsAction = (userDetails) => (dispatch, getState) => {
  const {
    User: {},
  } = getState();
  dispatch({
    type: "SET_USER_DETAILS",
    payload: userDetails,
  });
};
