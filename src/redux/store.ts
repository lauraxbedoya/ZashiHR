import { createStore, combineReducers } from 'redux';
import addresReducer from './reducers/address-reducer';
import sessionReducer from './reducers/session-reducer';
import settingReducer from './reducers/setting-reducer';

const reducers = combineReducers({
  sessions: sessionReducer,
  settings: settingReducer,
  address: addresReducer,
});

const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>

export default store;