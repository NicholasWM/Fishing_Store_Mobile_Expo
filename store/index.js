import { createStore, combineReducers } from 'redux'

import produtos from './produtos'

const rootReducer = combineReducers({
    produtos
})

export default createStore(rootReducer)