import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toolkitReducer from 'toolkitRedux/toolkitReducer';
import toolkitSlice from 'toolkitRedux/toolkitSlice';

const rootReducer = combineReducers({
    toolkit: toolkitReducer,
    toolkitSlice
});

export const store = configureStore({
    reducer: rootReducer
});
