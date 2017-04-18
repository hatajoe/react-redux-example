export const ADD_TODO = 'ADD_TODO'
export const DEL_TODO = 'DEL_TODO'

export const addTodo = (payload) => { return { type: ADD_TODO, payload } }
export const delTodo = (payload) => { return { type: DEL_TODO, payload } }
