import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({});

const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>

export default store;