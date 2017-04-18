import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class App extends Component {
	render = () => {
		const { todos, onAdd } = this.props
		return (
			<div>
				<input type="text" />
				<button onClick={e => onAdd(e)} >add</button>
				{ todos.map(todo => (<li>{todo}</li>)) }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (e) => {
      dispatch(addTodo({todo: e.target.value}))
    }
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App)

