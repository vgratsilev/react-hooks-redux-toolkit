import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from 'toolkitRedux/toolkitReducer';
import { addTodo, removeLastTodo } from 'toolkitRedux/toolkitSlice';

const addAsyncTodo = () => async (dispatch) => {
    setTimeout(() => dispatch(addTodo('Async TODO')), 2000);
};

function App() {
    const count = useSelector((state) => state.toolkit.count);
    const todos = useSelector((state) => state.toolkitSlice.todos);
    const dispatch = useDispatch();

    return (
        <div className={'App'}>
            <h1>Counter {count}</h1>
            <button type={'button'} className={'btn'} onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button type={'button'} className={'btn'} onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <button type={'button'} className={'btn'} onClick={() => dispatch(removeLastTodo())}>
                Delete last TODO
            </button>
            <button type={'button'} className={'btn'} onClick={() => dispatch(addTodo(prompt()))}>
                Add TODO
            </button>
            <button type={'button'} className={'btn'} onClick={() => dispatch(addAsyncTodo())}>
                Add Async TODO
            </button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
