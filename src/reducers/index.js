import * as types from '../actions'

const initialState = {
	"isLoading": false,
	"todos": [
		"hoge", "fuga"
	]
}

export const todoApp = (state = initialState, action) => {
	switch (action.type) {
		case types.API_SAVE_TODO.REQUEST:
			return Object.assign({}, state, {
				isLoading: true,
			})
		case types.API_SAVE_TODO.SUCCESS:
			let todos = Object.assign([], state.todos)
			todos.push(action.payload.todo)
			return Object.assign({}, state, {
				isLoading: false,
				todos: todos
			})
		case types.API_SAVE_TODO.FAILURE:
			return Object.assign({}, state, {
				isLoading: false,
				// 本当はなんかしらエラー処理が必要
			})
		default:
			return state
	}
}
