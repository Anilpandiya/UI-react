import * as actions from './actions';

export const cardReducer = (state = [], action) => {
  switch(action.type) {
		case actions.ADD_FILES_CARD:
      {
				return [...state, ...action.files]
      }
    default:
      break;
    }
    return state;
}

export default cardReducer;