import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState, ServiceType } from "..";
import { getActiveCategoryAction, getActivePageAction, getCategoriesAction, getCatsByLimitAction, setLoadingCatsAction } from "../actions/cat.action";

type Effect = ThunkAction<void, RootState, ServiceType, AnyAction>


export const getCategoriesEffect = (): Effect => {
    return async (dispatch, getState, services) => {
        try {
            const result = await services.getCatsCategories()

            dispatch(getCategoriesAction(result.data))
        } catch (error: any) {
            console.log("getCategoriesEffect", error.message);
        }
    }
}


export const getCatsByLimitEffect = (page: number = 1, limit: number = 10, categoryId?: number): Effect => {
    return async (dispatch, getState, services) => {
        dispatch(setLoadingCatsAction(true))
        try {

            const {categories} = getState()

            if(!categories.length){
                dispatch(getCategoriesEffect())
            }

            if(categoryId){
                dispatch(getActiveCategoryAction(categoryId))
            }

            dispatch(getActivePageAction(page))

            const result = await services.getCatsByLimit(page, limit, categoryId)

            dispatch(getCatsByLimitAction(result.data))

            dispatch(setLoadingCatsAction(false))
        } catch (error: any) {
            console.log("getCatsByLimitEffect", error.message);
            dispatch(setLoadingCatsAction(false))
        }
    }
}