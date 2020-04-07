import { createReducer, createAction } from '@reduxjs/toolkit'
import { filtraDuplicados } from '../../helpers'
const INITIAL_STATE = []

export const addStockData = createAction("ADD_STOCK_DATA")
export const addStockMultipleData = createAction("ADD_STOCK_MULTIPLE_DATA")
export const setSelectedStockProduct = createAction("SET_SELECTED_STOCK_PRODUCT")
export const addItemToSelectedStockProduct = createAction("ADD_ITEM_TO_SELECTED_PRODUCT")

export default createReducer(INITIAL_STATE,{
    [addStockData.type]: (state, {payload}) => state.length == 0 ?[...payload]:[...state, ...payload ],
    [addStockMultipleData.type]: (state, {payload}) => [...state, ...payload.filter(item =>
         state.length === 0 ? true : filtraDuplicados(state, item, "id")
    ) ],
    [setSelectedStockProduct.type]: (state, {payload}) => ({...state, selectedProduct: [...payload]}),
    [addItemToSelectedStockProduct.type]: (state, {payload}) => ({...state, selectedProduct: [...state.selectedProduct, payload]}),
})

