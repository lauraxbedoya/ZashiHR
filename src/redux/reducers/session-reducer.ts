import { ActionType, UserType } from "../../utils/types";

const initialState: SessionsReducerType = {
  userInfo: null,
};

const sessionReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'STORE_USER_INFO':
      return {
        ...state,
        userInfo: action.payload,
      };
    case 'REMOVE_USER_INFO': 
      return {
        ...state,
        userInfo: null,
      }
    default:
      return state;
  }
};

export default sessionReducer;

type SessionsReducerType = {
  userInfo: UserType | null,
}