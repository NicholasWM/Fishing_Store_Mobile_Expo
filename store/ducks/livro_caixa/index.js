import { createReducer, createAction } from '@reduxjs/toolkit'

const INITIAL_STATE = {
	registros: [], compra_selecionada:[]
}

export const setLivroCaixaRegistros = createAction('SET_LIVRO_CAIXA_REGISTROS')
export const getLivroCaixaDadosCompraSeleciona = createAction('SET_LIVRO_CAIXA_COMPRA_SELECIONADA')
export const pagarCompra = createAction('PAGAR_COMPRA')
export default createReducer(INITIAL_STATE, {
	[setLivroCaixaRegistros.type]: (state,{payload}) => ({...state, registros: payload}),
	[getLivroCaixaDadosCompraSeleciona.type]: (state,{payload}) => ({...state, compra_selecionada: payload}),
	[pagarCompra.type]: (state, {payload}) => {
		// return state.map(item => item.id == payload.id? payload: item)
		const modo = payload.data.registro.modo
		let compra_modificada = {}
		compra_modificada[modo] = [...state.compra_selecionada[modo], payload.data.registro]
		return {
			...state,
			compra_selecionada:{...state.compra_selecionada, ...compra_modificada, total:{...state.compra_selecionada.total, pago:payload.data.pago}}
		}
		// return state
},
})