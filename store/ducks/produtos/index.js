import { createReducer, createAction } from '@reduxjs/toolkit'
const INITIAL_STATE = []

export const addProducts = createAction("ADD_PRODUCTS")
export const addProduct = createAction("ADD_PRODUCT")
export const editProduct = createAction("EDIT_PRODUCT")

export default createReducer(INITIAL_STATE, {
    // [addProducts.type]: (state, {payload}) => state.length == 0?[...payload]:[...state, ...payload],
    [addProducts.type]: (state, {payload}) => [...state, ...payload.filter(item =>
        state.length === 0 ? true : filtraDuplicados(state, item, "categoria")
   ) ],
    [addProduct.type]: (state, {payload}) => {
        // Verifica se a categoria do Item já existe
        // Caso não cria uma nova categoria e insere o item
        // Caso sim, insere o item dentro da categoria
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

