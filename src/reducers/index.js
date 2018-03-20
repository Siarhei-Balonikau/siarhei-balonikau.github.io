import { combineReducers } from 'redux';
import blogs from './blogs';
import formAddBlog from './formAddBlog';
import formAuth from './formAuth';

const reducers = combineReducers({
  blogs,
  formAddBlog,
  formAuth
})

export default reducers