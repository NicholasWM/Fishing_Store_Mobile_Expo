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
		// const modo = payload.data.registro.modo
		let compra_modificada = {}
		const {registros, pago} = payload.data

		registros.forEach(registro => {
			console.log("Payload: ", registro)
			compra_modificada[registro.modo] = [...state.compra_selecionada[registro.modo], registro]
		});
		return {
			...state,
			compra_selecionada:{...state.compra_selecionada, ...compra_modificada, total:{...state.compra_selecionada.total, pago, falta: state.compra_selecionada.total.preco_total - pago}}
		}
	},
})