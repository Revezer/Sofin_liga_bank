import {ActionType} from './action';

const initialState = {
  information: {
    goal: 'Выберите цель кредита',
    secondStep: false,
    propertyValue: 2000000,
    contribution: 10,
    year: 5,
    capital: false,
    anInitialFee: 200000,
    ordering: false,
    applicationNumber: 1,
    gratitude: false,
    openinput: false,
    kasko: false,
    insurance : false
  },
  menu: false,
  width: 0,
  selectedMenu: 'deposit',
  login: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.CHANGE_INFORMATION:
        return {
          ...state,
          information: action.payload
        };
      case ActionType.MENU_TOGGLE:
        return {
          ...state,
          menu: action.payload,
        };
      case ActionType.CHANGE_WIDTH:
        return {
          ...state,
          width: action.payload,
        };
      case ActionType.SERVICE_MENU:
        return {
          ...state,
          selectedMenu: action.payload
        };
      case ActionType.SWITCH_LOGIN:
        return {
          ...state,
          login: action.payload
        }
      default:
    }
  return state;
};

export default reducer;
