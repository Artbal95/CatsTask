import axios from "../config/axios"

export const getCatsByLimit = (page: number = 1, limit: number = 10, categoryId?: number) => {
    const category_ids = categoryId ? `category_ids=${categoryId}` : "category_ids"
    return axios.get(`/images/search?limit=${limit}&page=${page}&${category_ids}`)
}

export const getCatsCategories = () => {
    return axios.get("/categories")
}