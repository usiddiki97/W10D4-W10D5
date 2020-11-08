import React from 'react';
import { uniqueId } from '../../utils/id';
import { merge } from 'lodash';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const todo = merge({}, this.state, {id: uniqueId()});
        debugger;
        this.props.receiveTodo(todo);
        this.setState({ title: "", body: ""});
    }

    render() {
        return (
            <section className="todo-form-container">
                <h2 className="todo-header">Make a new Todo</h2>
                <form className="todo-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="todo-title">Title</label>
                    <input
                        type="text"
                        id="todo-title"
                        onChange={this.update("title")}
                        value={this.state.title}
                    />
                    <label htmlFor="todo-body">Body</label>
                    <input
                        type="text"
                        id="todo-body"
                        onChange={this.update("body")}
                        value={this.state.body}
                    />
                    <input
                        type="submit"
                        value="Create Todo"
                    />
                </form>
            </section>
        )
    }
}

export default TodoForm;