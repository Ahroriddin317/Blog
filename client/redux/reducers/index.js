import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import post from './post'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    post
  })

export default createRootReducer
