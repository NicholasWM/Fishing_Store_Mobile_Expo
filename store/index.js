import { configureStore } from '@reduxjs/toolkit'

import produtos from './ducks/produtos'
import estoque from './ducks/estoque'
import search from './ducks/search'

export default configureStore({
    reducer:{
        produtos, estoque, search
    }
})