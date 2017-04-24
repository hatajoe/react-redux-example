import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import * as reducers from './reducers'
import App from './containers/app'
import { Home } from './containers/home'
import { About } from './containers/about'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// create store with reducers
let store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }), 
  applyMiddleware(sagaMiddleware)
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
  // connect store to react
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home}>
        <IndexRoute component={App} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
