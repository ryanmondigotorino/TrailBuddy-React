// Imports: Dependencies
import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

// Exports
export default rootReducer;
