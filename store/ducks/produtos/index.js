import { createReducer, createAction } from '@reduxjs/toolkit'
import {filtraDuplicados} from '../../helpers'
const INITIAL_STATE = {
	estoque:[], nova_compra:[], compra_selecionada:[]
}

export const addProducts = createAction("ADD_PRODUCTS")
export const addProduct = createAction("ADD_PRODUCT")
export const editProduct = createAction("EDIT_PRODUCT")
export const updateNumberOfUnits = createAction("UPDATE_NUMBER_OF_UNITS")
export const addNovaCompra = createAction("ADD_NOVA_COMPRA")
export const resetNovaCompra = createAction("RESET_NOVA_COMPRA")
export const resetEdicaoCompra = createAction("RESET_EDICAO_COMPRA")
export const addProdutoNovaCompra = createAction("ADD_PRODUTO_NOVA_COMPRA")
export const removeProdutoNovaCompra = createAction("REMOVE_PRODUTO_NOVA_COMPRA")
export const addProdutoSelecionadoEdicao = createAction("ADD_PRODUTO_SELECIONADO_EDICAO")
export const removeProdutoSelecionadoEdicao = createAction("REMOVE_PRODUTO_SELECIONADO_EDICAO")

export default createReducer(INITIAL_STATE, {
    [addProducts.type]: (state, {payload}) => ({...state, estoque:[...state.estoque,...payload.filter(item =>
        state.estoque && state.estoque.length === 0 ? true : filtraDuplicados(state.estoque, item, "categoria")
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
            return {...state, estoque:[...state.estoque, {
                categoria: payload.categoria,
                itens_diferentes:1,
                total_unidades: 0,
                valor_em_estoque: 0,
                produtos: [payload]
            }]}
        }
        return {...state ,estoque:[...new_state]}
    },
    [updateNumberOfUnits.type]:(state, {payload}) => ({
		...state,
		estoque:state.estoque.map(categoria => ({
			...categoria ,
			produtos: categoria.produtos.map(produto=>{
				if(produto.id == payload.id){
					return payload.modo && payload.modo.toLowerCase() == 'saida' ?
					({...produto, quantidade:Number(produto.quantidade)-Number(payload.quantidade)})
					:({...produto, quantidade:Number(produto.quantidade)+Number(payload.quantidade)})
				}
				return produto
			}
			)})
	)}),
    [addNovaCompra.type]: (state, {payload}) => state,
    [resetNovaCompra.type]: (state) => ({...state, nova_compra:[]}),
    [addProdutoNovaCompra.type]: (state, {payload}) => {
		const indexCompra = state.nova_compra.findIndex(({produto_id}) => produto_id == payload.produto.produto_id)
		// console.log("payload: ", payload)
		let categoria = state.estoque.find(cat => cat.categoria == payload.categoria)

		let produto_em_estoque = categoria.produtos[payload.index]

		// console.log(`${state.nova_compra[indexCompra] && state.nova_compra[indexCompra].quantidade} <= ${produto_em_estoque.quantidade}`)
		if(indexCompra >= 0) {
			if(!state.nova_compra[indexCompra] ||state.nova_compra[indexCompra].quantidade < produto_em_estoque.quantidade){
				return {
					...state,
					nova_compra:[
						...state.nova_compra.map((compra, index) =>
							indexCompra == index ?
								({...compra, quantidade: Number(compra.quantidade) + Number(payload.produto.quantidade)}): compra)
					]
				}
			}else{
				return {
					...state,
					nova_compra:[
					...state.nova_compra.map((compra, index) => indexCompra == index ?
						({...compra, quantidade: Number(compra.quantidade)}): compra)]
				}
			}
		}else{
			return {
				...state,
				nova_compra:[...state.nova_compra, payload.produto]
			}
		}

	},
    [removeProdutoNovaCompra.type]: (state, {payload}) => {
		const indexCompra = state.nova_compra.findIndex(({produto_id}) => produto_id == payload.produto_id)
		if(indexCompra >= 0){
			return {
				...state,
				nova_compra: state.nova_compra.map((value, index) => {
					if(index == indexCompra){
						if(value.quantidade != 0){
							return {...value, quantidade: value.quantidade - 1}
						}
					}
					return value
				}).filter(item => item.quantidade != 0)
			}
		}
	},
    [addProdutoSelecionadoEdicao.type]: (state, {payload}) => {
		const indexCompra = state.compra_selecionada.findIndex(({produto_id}) => produto_id == payload.produto.produto_id)
		// console.log("payload: ", payload)
		let categoria = state.estoque.find(cat => cat.categoria == payload.categoria)

		let produto_em_estoque = categoria.produtos[payload.index]

		// console.log(`${state.compra_selecionada[indexCompra] && state.compra_selecionada[indexCompra].quantidade} <= ${produto_em_estoque.quantidade}`)
		if(indexCompra >= 0) {
			if(!state.compra_selecionada[indexCompra] ||state.compra_selecionada[indexCompra].quantidade < produto_em_estoque.quantidade){
				return {
					...state,
					compra_selecionada:[
						...state.compra_selecionada.map((compra, index) =>
							indexCompra == index ?
								({...compra, quantidade: Number(compra.quantidade) + Number(payload.produto.quantidade)}): compra)
					]
				}
			}else{
				return {
					...state,
					compra_selecionada:[
					...state.compra_selecionada.map((compra, index) => indexCompra == index ?
						({...compra, quantidade: Number(compra.quantidade)}): compra)]
				}
			}
		}else{
			return {
				...state,
				compra_selecionada:[...state.compra_selecionada, payload.produto]
			}
		}

	},
    [removeProdutoSelecionadoEdicao.type]: (state, {payload}) => {
		const indexCompra = state.compra_selecionada.findIndex(({produto_id}) => produto_id == payload.produto_id)
		if(indexCompra >= 0){
			return {
				...state,
				compra_selecionada: state.compra_selecionada.map((value, index) => {
					if(index == indexCompra){
						if(value.quantidade != 0){
							return {...value, quantidade: value.quantidade - 1}
						}
					}
					return value
				}).filter(item => item.quantidade != 0)
			}
		}
	},
	[resetEdicaoCompra.type]: (state,{payload}) => ({...state, compra_selecionada: []})
})
