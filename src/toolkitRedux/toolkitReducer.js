import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
    count: 0
};

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');

export default createReducer(initialState, {
    [increment](state) {
        state.count += 1;
    },
    [decrement](state) {
        state.count -= 1;
    }
});
