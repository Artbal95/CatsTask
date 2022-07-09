import { AnyAction } from "@reduxjs/toolkit";
import { ICatInitialState } from "../types/cat.types";
import * as CatActionTypes from "../actionTypes/action.types"

const intitalState: ICatInitialState = {
    cats: [],
    categories: [],
    activeCategory: 0,
    activePage: 1,
    loadingCats: false,
}

const reducer = (state: ICatInitialState = intitalState, action: AnyAction): ICatInitialState => {
    switch(action.type){

        case CatActionTypes.GET_CATS_BY_LIMIT:
            return {
                ...state,
                cats: action.cats
            }

        case CatActionTypes.GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }

        case CatActionTypes.LOADING_CATS:
            return {
                ...state,
                loadingCats: action.loading
            }

        case CatActionTypes.GET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory: action.activeCategory
            }

        case CatActionTypes.GET_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.activePage
            }

        default: 
            return state
    }
}

export default reducer