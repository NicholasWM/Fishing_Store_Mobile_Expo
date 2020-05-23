import { createReducer, createAction } from '@reduxjs/toolkit'
import {filtraDuplicados} from '../../helpers'
const INITIAL_STATE = {
	estoque:[], nova_compra:[]
}

export const addProducts = createAction("ADD_PRODUCTS")
export const addProduct = createAction("ADD_PRODUCT")
export const editProduct = createAction("EDIT_PRODUCT")
export const updateNumberOfUnits = createAction("UPDATE_NUMBER_OF_UNITS")
export const addNovaCompra = createAction("ADD_NOVA_COMPRA")
export const resetNovaCompra = createAction("RESET_NOVA_COMPRA")
export const addProdutoNovaCompra = createAction("ADD_PRODUTO_NOVA_COMPRA")
export const removeProdutoNovaCompra = createAction("REMOVE_PRODUTO_NOVA_COMPRA")

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
    [updateNumberOfUnits.type]:(state, {payload}) => ({
		...state,
		estoque:state.estoque.map(categoria => ({
			...categoria ,
			produtos: categoria.produtos.map(produto=>
				produto.id == payload.id ? ({...produto, quantidade:Number(produto.quantidade)+Number(payload.quantidade)}):produto
			)})
	)}),
    [addNovaCompra.type]: (state, {payload}) => state,
    [resetNovaCompra.type]: (state) => ({...state, nova_compra:[]}),
    [addProdutoNovaCompra.type]: (state, {payload}) => {
		const indexCompra = state.nova_compra.findIndex(({produto_id}) => produto_id == payload.produto_id)
		console.log('index', indexCompra)
		return indexCompra >= 0 ? {
				...state,
				nova_compra:[
				...state.nova_compra.map((compra, index) => indexCompra == index ?
					({...compra, quantidade: Number(compra.quantidade) + Number(payload.quantidade)}): compra)]
			}:{
				...state,
				nova_compra:[...state.nova_compra, payload]
			}
	},
    [removeProdutoNovaCompra.type]: (state, {payload}) => {
		const indexCompra = state.nova_compra.findIndex(({produto_id}) => produto_id == payload.produto_id)
		if(indexCompra >= 0){
			console.log(state.nova_compra[indexCompra])
			return {
				...state,
				nova_compra: state.nova_compra.map(compra => compra.id == payload.produto_id ? {...compra, quantidade: compra.quantidade - payload.quantidade}: compra).filter(compra => compra.quantidade > 0)
			}
		}
	},

})
