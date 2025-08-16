import { getCategories, getProducts } from "./products-api"
import { renderCategories, renderProducts } from "./render-function";

let currentPage = 1;

export async function initHomePage() {
    try {
        const categories = await getCategories()
        renderCategories(categories)
        const { products, total } = await getProducts(currentPage)
        renderProducts(products)
    } catch (error) {
        console.error(`Error initalization home page: ${error}`)
    }
}