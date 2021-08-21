import {ActionType} from './action';

const initialState = {
  menu: false,
  width: 0,
  selectedMenu: 'deposit',
  login: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
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
