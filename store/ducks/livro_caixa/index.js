import { createReducer, createAction } from '@reduxjs/toolkit'

const INITIAL_STATE = {
	registros: [], compra_selecionada:[]
}

export const setLivroCaixaRegistros = createAction('SET_LIVRO_CAIXA_REGISTROS')
export const getLivroCaixaDadosCompraSeleciona = createAction('SET_LIVRO_CAIXA_COMPRA_SELECIONADA')

export default createReducer(INITIAL_STATE, {
	[setLivroCaixaRegistros.type]: (state,{payload}) => ({...state, registros: payload}),
	[getLivroCaixaDadosCompraSeleciona.type]: (state,{payload}) => ({...state, compra_selecionada: payload}),
})