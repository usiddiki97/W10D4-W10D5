import { merge } from 'lodash';
import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";

// const newTodos = [
//     {
//         id: 1,
//         title: "wash car",
//         body: "with soap",
//         done: false
//     },
//     {
//         id: 2,
//         title: "wash dog",
//         body: "with shampoo",
//         done: true
//     }
// ];

const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    
    let newState = {};

    switch(action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach(todo => {
                newState[todo.id] = todo;
            });
            return newState;
        case RECEIVE_TODO:
            const newToDo = {[action.todo.id]: action.todo};
            newState = merge({}, state, newToDo);
            return newState;
        default:
            return state;
    }
};

export default todosReducer;


// store.getState(); // should return default state object
// store.dispatch(receiveTodo({ id: 3, title: "New Todo" }));
// store.getState(); // should include the newly added todo
// store.dispatch(receiveTodos(newTodos));
// store.getState();