import {applyMiddleware, createStore, combineReducers} from 'redux'
import * as reducers from '../redux/modules'
import thunkMiddleware from 'redux-thunk'

export default function configureStore(initialState) {
  const create = typeof window !== 'undefined' && window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(create)

  return createStoreWithMiddleware(combineReducers(reducers), initialState)
}
