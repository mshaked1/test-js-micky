import { combineReducers } from 'redux'

function movies (state = [], action) {
  switch (action.type) {
    case 'GET_MOVIES_SUCCESS':
      return action.movies

    default:
      return state
  }
}

function get (state = false, action) {
  switch (action.type) {
    case 'TOGGLE_GET':
      console.log('toggle get reducer')
      return !state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  movies,
  get
})

export default rootReducer
