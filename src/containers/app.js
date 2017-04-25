import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class App extends Component {
	constructor() {
		super()
		this.state = {
			todo: ''
		}
	}
	onChangeTodoInput = (e) => {
		this.setState({
			todo: e.target.value,
		})
	}
	onAddTodo = (e) => {
		this.props.onAdd(this.state.todo)
		e.preventDefault()
	}
	render = () => {
		const { todos, isLoading } = this.props
		return (
			<div>
				{ isLoading ? <p>{"Loading..."}</p> : <input type="text" onChange={e => this.onChangeTodoInput(e)} /> }
				<button onClick={e => this.onAddTodo(e)} >add</button>
				{ todos.map(todo => (<li>{todo}</li>)) }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    todos: state.todoApp.todos,
		isLoading: state.todoApp.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (todo) => {
      dispatch(addTodo({todo: todo}))
    }
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App)
