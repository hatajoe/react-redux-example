import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
	render = () => {
		const { todos } = this.props
		return (
			<div>
				<input type="text" />
				<button>add</button>
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

export default connect(
	mapStateToProps,
)(App)

