import { createReducer, createAction } from '@reduxjs/toolkit'

const INITIAL_STATE = []

export const setLivroCaixaData = createAction('SET_LIVRO_CAIXA_DATA')

export default createReducer(INITIAL_STATE, {
	[setLivroCaixaData.type]: (state,{payload}) => payload,
})