import {
  LOGIN_START,
  LOGIN_RESOLVED,
  FETCHING_FRIENDS,
  FETCHING_FRIENDS_START,
  FETCHING_FRIENDS_ERROR
} from '../actions';

const initialState = {
  friends: [],
  deletingFriends: false,
  fetchingFriends: false,
  logginIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        logginIn: true
      };
    case LOGIN_RESOLVED:
      return {
        ...state,
        logginIn: false
      };
    case FETCHING_FRIENDS_START:
      return {
        ...state,
        fetchingFriends: true
      };
    case FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload
      };
    case FETCHING_FRIENDS_ERROR:
      return {
        ...state,
        error: action.payload,
        fetchingFriends: false
      };
    default:
      return state;
  }
};
