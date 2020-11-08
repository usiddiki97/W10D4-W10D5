import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
// import App from './components/app.jsx';
import configureStore from './store/store.js';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import { allTodos } from './reducers/selectors';

document.addEventListener("DOMContentLoaded", function() {
    const store = configureStore;
    const root = document.getElementById("content");
    ReactDOM.render(<Root store={store} />, root);
    
    window.store = store;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.allTodos = allTodos;
});