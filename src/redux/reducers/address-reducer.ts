import { ActionType, UserAddressType } from "../../utils/types";

const initialState: AddressReducerType = {
  address: null,
};

const addresReducer = (state = initialState, action: ActionType) => {
  switch (action.payload) {
    case 'STORE_USER_ADDRESS':
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};

export default addresReducer;

type AddressReducerType = {
  address: UserAddressType | null,
}