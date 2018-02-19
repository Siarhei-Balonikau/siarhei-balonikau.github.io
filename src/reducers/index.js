import { combineReducers } from 'redux';
import blogs from './blogs';
import form from './form';

const reducers = combineReducers({
  blogs,
  form
})

export default reducers