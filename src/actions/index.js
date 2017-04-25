export const ADD_TODO = 'ADD_TODO'
export const DEL_TODO = 'DEL_TODO'
export const API_SAVE_TODO = {
    'REQUEST': 'API_SAVE_TODO_REQUEST',
    'SUCCESS': 'API_SAVE_TODO_SUCCESS',
    'FAILURE': 'API_SAVE_TODO_FAILURE',
}

export const addTodo = (payload) => { return { type: ADD_TODO, payload } }
export const delTodo = (payload) => { return { type: DEL_TODO, payload } }
export const apiSaveTodo = {
    request: payload => {
        return {
            type: API_SAVE_TODO.REQUEST,
            payload
        }
    },
    success: payload => {
        return {
            type: API_SAVE_TODO.SUCCESS,
            payload
        }
    },
    failure: payload => {
        return {
            type: API_SAVE_TODO.FAILURE,
            payload
        }
    },
}
