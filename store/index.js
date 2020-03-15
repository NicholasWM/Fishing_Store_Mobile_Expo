import { configureStore } from '@reduxjs/toolkit'

import produtos from './ducks/produtos'

export default configureStore({
    reducer:{
        produtos
    }
})