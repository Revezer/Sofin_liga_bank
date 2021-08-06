import {ActionType} from './action';

const initialState = {
  slideNumber: 0,
  reviews: 'k',
  info: 'characteristics',
  popup: 'close'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.SLIDE_SELECTION:
        return {
          ...state,
          slideNumber: action.payload,
        };
      case ActionType.CHOICE_INFORMATION:
        return {
          ...state,
          info: action.payload,
        }
      case ActionType.ADD_REVIEW:
        return {
          ...state,
          reviews: action.payload
        }
      case ActionType.OPEN_POPUP:
        return {
          ...state,
          popup: action.payload
        }
      default:
    }
  return state;
};

export default reducer;
