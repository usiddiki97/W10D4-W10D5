import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component {
    render() {
        const todos = this.props.todos;
        const titles = todos.map((todo) => {
            return (
                <TodoListItem key={todo.id} todo={todo} />
            )
        });
        const receiveTodo = this.props.receiveTodo;
        
        return (
            <div>
                <h3>Todo List goes here!!!</h3>
                <ul>
                    {titles}
                </ul>
                <TodoForm receiveTodo={receiveTodo} />
            </div>
        )
    }
}

export default TodoList;