import { createReducer, createAction } from '@reduxjs/toolkit'
import {filtraDuplicados} from '../../helpers'
const INITIAL_STATE = {
	estoque:[], nova_compra:[]
}
// const INITIAL_STATE = []

export const addProducts = createAction("ADD_PRODUCTS")
export const addProduct = createAction("ADD_PRODUCT")
export const editProduct = createAction("EDIT_PRODUCT")
export const updateNumberOfUnits = createAction("UPDATE_NUMBER_OF_UNITS")

export default createReducer(INITIAL_STATE, {
    [addProducts.type]: (state, {payload}) => ({...state, estoque:[...state.estoque,...payload.filter(item =>
        state.estoque.length === 0 ? true : filtraDuplicados(state.estoque, item, "categoria")
   ) ]}),
    [addProduct.type]: (state, {payload}) => {
        let exists = false
        const new_state = state.estoque.map(item =>
            item.categoria == payload.categoria ?
                (()=>{
                    exists = true
                    return {...item, produtos: [...item.produtos, payload]}
            })():item
        )
        if(!exists){
            return [...state.estoque, {
                categoria: payload.categoria,
                itens_diferentes:1,
                total_unidades: 0,
                valor_em_estoque: 0,
                produtos: [payload]
            }]
        }
        return {...state ,estoque:[...new_state]}
    },
    [updateNumberOfUnits.type]:
     (state, {payload}) => ({
		...state,
		estoque:state.estoque.map(categoria => ({
			...categoria ,
			produtos: categoria.produtos.map(produto=>
				produto.id == payload.id ? ({...produto, quantidade:Number(produto.quantidade)+Number(payload.quantidade)}):produto
			)})
	)}),
})
