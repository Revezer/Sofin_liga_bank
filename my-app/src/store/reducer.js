import {ActionType} from './action';

const initialState = {
  menu: false,
  reviews: 'k',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.MENU_TOGGLE:
        return {
          ...state,
          menu: action.payload,
        };
      case ActionType.CHOICE_INFORMATION:
        return {
          ...state,
          info: action.payload,
        };
      default:
    }
  return state;
};

export default reducer;
