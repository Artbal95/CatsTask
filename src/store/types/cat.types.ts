import { Action } from "@reduxjs/toolkit";
import { CategoriesType, CatsDataType } from "../../types/types";

export interface ICatInitialState {

    cats: CatsDataType[]

    categories: CategoriesType[]

    activeCategory: number

    activePage: number

    loadingCats: boolean
}

export interface IGetCatsByLimitAction extends Action<string> {
    cats: CatsDataType[]
}

export interface IGetCategoriesAction extends Action<string> {
    categories: CategoriesType[]
}

export interface IGetActiveCategoryAction extends Action<string> {
    activeCategory: number
}

export interface IGetActivePageAction extends Action<string> {
    activePage: number
}

export interface ILoadingAction extends Action<string> {
    loading: boolean
}