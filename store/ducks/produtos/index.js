import { createReducer, createAction } from '@reduxjs/toolkit'
const INITIAL_STATE = []

export const addProducts = createAction("ADD_PRODUCTS")
export const addProduct = createAction("ADD_PRODUCT")
export const editProduct = createAction("EDIT_PRODUCT")

export default createReducer(INITIAL_STATE, {
    [addProducts.type]: (state, action) => [...state, ...action.payload],
    [addProduct.type]: (state, {payload}) => {
        let exists = false
        const new_state = state.map(item => 
            item.categoria == payload.categoria ? 
                (()=>{
                    exists = true
                    return {...item, produtos: [...item.produtos, payload]}
            })():item
        )
        if(!exists){
            return [...state, {
                categoria: payload.categoria,
                itens_diferentes:1,
                total_unidades: 0,
                valor_em_estoque: 0,
                produtos: [payload]
            }]
        }
        return [...new_state]
    },
    // []: (state, action) =>  [...state],
})

