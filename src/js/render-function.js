
import {} from "./refs.js"

import axios from "axios";

const categoriesList = document.querySelector(".categories");

export async function category() {
  try {
    const { data } = await axios.get("https://dummyjson.com/products/categories");
    const categories = data; // масив категорій (["smartphones", "laptops", ...])

    // додаємо категорію ALL на початок
    const allCategories = ["ALL", ...categories];

    const markup = allCategories
      .map(
        (cat) => `
        <li>
          <button class="categories__btn" data-category="${cat}">
            ${cat}
          </button>
        </li>`
      )
      .join("");

    categoriesList.innerHTML = markup;
  } catch (error) {
    console.error("Помилка при отриманні категорій:", error);
  }
}