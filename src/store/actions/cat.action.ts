import { CategoriesType, CatsDataType } from "../../types/types";
import { IGetActiveCategoryAction, IGetActivePageAction, IGetCategoriesAction, IGetCatsByLimitAction, ILoadingAction } from "../types/cat.types";

import * as CatsActionTypes from "../actionTypes/action.types"

export const getCatsByLimitAction = (cats: CatsDataType[]): IGetCatsByLimitAction => ({
    type: CatsActionTypes.GET_CATS_BY_LIMIT,
    cats
})

export const getCategoriesAction = (categories: CategoriesType[]): IGetCategoriesAction => ({
    type: CatsActionTypes.GET_CATEGORIES,
    categories
})

export const getActiveCategoryAction = (activeCategory: number): IGetActiveCategoryAction => ({
    type: CatsActionTypes.GET_ACTIVE_CATEGORY,
    activeCategory
})

export const getActivePageAction = (activePage: number): IGetActivePageAction => ({
    type: CatsActionTypes.GET_ACTIVE_PAGE,
    activePage
})

export const setLoadingCatsAction = (loading: boolean): ILoadingAction => ({
    type: CatsActionTypes.LOADING_CATS,
    loading
})
