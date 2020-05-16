import { createReducer, createAction } from '@reduxjs/toolkit'
const INITIAL_STATE = []

export const getComprasData = createAction('GET_COMPRAS_DATA')

export default createReducer(INITIAL_STATE, {
	[getComprasData.type]: (state, {payload}) => [...state, ...payload],
})