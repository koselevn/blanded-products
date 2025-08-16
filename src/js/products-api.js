import axios from "axios"
import { API_BASE_URL, API_ENDPOINTS, ITEMS_PER_PAGE } from "./constants"

axios.defaults.baseURL = API_BASE_URL

export async function getCategories() {
    const { data } = await axios.get(`${API_ENDPOINTS.CATEGORY}`)

    return data
}


export async function getProducts(currentPage) {
    const skip = (currentPage - 1) * ITEMS_PER_PAGE
    const { data } = await axios.get(`${API_ENDPOINTS.PRODUCTS}?limit=${ITEMS_PER_PAGE}&skip=${skip}`)

    return data
}