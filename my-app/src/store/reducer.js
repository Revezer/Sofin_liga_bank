import {ActionType} from './action';

const initialState = {
  menu: false,
  width: 0,
  selectedMenu: 'deposit',
  login: false,
  points: [
    {
      latitude: 57.1522200,
      longitude: 65.5272200
    },
    {
      latitude: 54.9924400,
      longitude: 73.3685900
    },
    {
      latitude: 55.7887400,
      longitude: 49.1221400
    }
  ]
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
