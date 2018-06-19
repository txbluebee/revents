import {combineReducers} from 'redux';
import { reducer as FormReducdr } from 'redux-form';
import testReducer from '../../features/textarea/testReducer';
import eventReducer from '../../features/event/eventReducer'

const rootReducer = combineReducers({
  form: FormReducdr,
  test: testReducer,
  events: eventReducer
})

export default rootReducer;