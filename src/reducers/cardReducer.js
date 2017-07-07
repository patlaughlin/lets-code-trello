import * as ActionTypes from '../action_types';

const initState = {};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST_SUCCESS: {
      return {};
    }

    default:
      return state;
  }
};

export default userReducer;
