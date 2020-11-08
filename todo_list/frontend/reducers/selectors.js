export const allTodos = (state) => {
    let todoKeys = Object.keys(state.todos);
    const todos = todoKeys.map(key => {
        return state.todos[key];
    });
    return todos;
}