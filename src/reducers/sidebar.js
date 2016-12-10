import { SIDEBAR_STATE } from '../actions';

const initialState =  {
  isOpen: false,
};

export default function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    case SIDEBAR_STATE:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
}
