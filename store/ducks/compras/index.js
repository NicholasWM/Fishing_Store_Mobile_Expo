import { createReducer, createAction } from '@reduxjs/toolkit'
const INITIAL_STATE = []

export const getComprasData = createAction('GET_COMPRAS_DATA')
export const alterarEstadoCompra = createAction('ALTERAR_ESTADO_COMPRA')
export const adicionarUmaCompra = createAction('ADICIONAR_UMA_COMPRA')


export default createReducer(INITIAL_STATE, {
	[getComprasData.type]: (state, {payload}) => [...state, ...payload],
	[alterarEstadoCompra.type]: (state, {payload}) => state.map(compra => compra.id == payload.id? {...compra, pago:payload.pago}:compra),
	[adicionarUmaCompra.type]: (state, {payload}) => [payload, ...state],
})