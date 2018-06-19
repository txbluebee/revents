import {combineReducers} from 'redux';
import testReducer from '../../features/textarea/testReducer';

const rootReducer = combineReducers({
  test: testReducer
})

export default rootReducer;