import { ActionType, SettingsType } from "../../utils/types";

const initialState: SettingsType = {
  logo: "",
  hideGender: false,
  hideMaritalStatus: false,
  hideSalary: false,
  extraTimeOff: 0,
  invitationExpire: 0
};

const settingReducer = (state = initialState, action: ActionType): SettingsType => {
  switch (action.type) {
    case 'STORE_LOGO':
        return {
          ...state,
          logo: action.payload,
        };
    case 'STORE_GENDER':
        return {
          ...state,
          hideGender: action.payload,
        };
      case 'STORE_MARITAL_STATUS':
        return {
          ...state,
          hideMaritalStatus: action.payload,
        };
      case 'STORE_SALARY':
        return {
          ...state,
          hideSalary: action.payload,
        };
      case 'STORE_EXTRA_TIME':
        return {
          ...state,
          extraTimeOff: action.payload,
        };
      case 'STORE_INVITATION_EXPIRE':
        return {
          ...state,
          invitationExpire: action.payload,
        };
    default:
      return state;
  }
};

export default settingReducer;