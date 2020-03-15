import { createReducer, createAction } from '@reduxjs/toolkit'
const INITIAL_STATE = []

export const addProducts = createAction("ADD_PRODUCTS")
export const addProduct = createAction("ADD_PRODUCT")
export const editProduct = createAction("EDIT_PRODUCT")

export default createReducer(INITIAL_STATE, {
    [addProducts.type]: (state, action) => [...state, ...action.payload],
    // []: (state, action) =>  [...state],
})

