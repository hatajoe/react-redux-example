import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
	render = () => {
		return (
			<div>
				<input type="text" />
				<button>add</button>
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

