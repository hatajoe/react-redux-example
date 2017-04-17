import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

// create store with reducers
let store = createStore(reducers)

render(
  // connect store to react
  <Provider store={store}>
  </Provider>,
  document.getElementById('root')
)
