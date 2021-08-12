import {ActionType} from './action';

const initialState = {
  menu: false,
  width: 0,
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
      default:
    }
  return state;
};

export default reducer;
