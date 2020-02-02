import { createStore } from 'redux';
import { cardReducer } from './reducer';

export const store = createStore(cardReducer);

export default store;