import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import rootReducer from './state/reducer'

import App from './components/app'

// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware
// )(createStore)
const configureStore = (preloadedState) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
)
const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
