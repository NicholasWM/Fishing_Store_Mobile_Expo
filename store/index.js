import {composeWithDevTools} from 'remote-redux-devtools'

import {createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import produtos from './ducks/produtos'
import estoque from './ducks/estoque'
import search from './ducks/search'
import livro_caixa from './ducks/livro_caixa'
import compras from './ducks/compras'

const composeEnhancers = composeWithDevTools({ hostname: 'localhost', realtime: true, port: 8000 });

const rootReducer = combineReducers({
	produtos, estoque, search, livro_caixa, compras
})

export default createStore(rootReducer, composeEnhancers(
		applyMiddleware(thunk)
	)
)