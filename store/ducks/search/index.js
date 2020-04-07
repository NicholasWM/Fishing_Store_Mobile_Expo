import { createReducer, createAction } from '@reduxjs/toolkit'
const INITIAL_STATE = {
    active: true,
    searchItem:''
}

export const changeSearch = createAction("CHANGE_SEARCH")
export const deactivateSearch = createAction("DEACTIVATE_SEARCH")
export const activateSearch = createAction("ACTIVATE_SEARCH")


export default createReducer(INITIAL_STATE,{
    [changeSearch.type]: (state, {payload}) => ({...state, searchItem: payload}),
    [activateSearch.type]: state => ({...state, active: true}),
    [deactivateSearch.type]: state => ({...state, active: false}),
})

