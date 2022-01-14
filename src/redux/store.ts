import { createStore, combineReducers } from 'redux';
import sessionReducer from './reducers/session-reducer';

const reducers = combineReducers({
  sessions: sessionReducer,
});

const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>

export default store;