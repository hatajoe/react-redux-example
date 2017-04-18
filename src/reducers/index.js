import * as types from '../actions'

const initialState = {
	"todos": [
		"hoge", "fuga"
	]
}

export default (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_TODO:
			let todos = Object.assign([], state.todos)
			todos.push(action.payload.todo)
			return Object.assign({}, state, {
				todos: todos
			})
		default:
			return state
	}
}
