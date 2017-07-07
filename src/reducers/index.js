import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'

import cardReducer from './cardReducer';

const rootReducer = combineReducers({
  cardReducer,
  form: formReducer,
});

export default rootReducer;
