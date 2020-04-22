import { configureStore } from '@reduxjs/toolkit'

import produtos from './ducks/produtos'
import estoque from './ducks/estoque'
import search from './ducks/search'
import livro_caixa from './ducks/livro_caixa'

export default configureStore({
    reducer:{
        produtos, estoque, search, livro_caixa
    }
})