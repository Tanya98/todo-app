
let nexTodoId = 3;

export const addTodo = (name, comment, time) => {
    return {
        type: 'ADD_TODO',
        id: nexTodoId++,
        name,
        comment,
        time
    }

}


export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id: id
    }
}