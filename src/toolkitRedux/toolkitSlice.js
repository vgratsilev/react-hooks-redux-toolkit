import { createSlice } from '@reduxjs/toolkit';

const toolkitSlice = createSlice({
    name: 'toolkitSlice',
    initialState: {
        todos: ['Setup app', 'Add redux-toolkit', 'Publish app to github']
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        removeLastTodo(state) {
            state.todos.pop();
        }
    }
});

export default toolkitSlice.reducer;
export const { addTodo, removeLastTodo } = toolkitSlice.actions;
