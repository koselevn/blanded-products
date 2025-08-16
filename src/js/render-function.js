import {refs} from './refs'
function templateProduct({
  id,
  title,
  category,
  thumbnail,
  price,
  brand,
}) {
  return `
  <li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: </span>${brand}</p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: $${price}</p>
 </li>
`;
}

function templateProducts(products) {
  return products.map(templateProduct).join('');
}

export function renderProducts(products) {
  const markup = templateProducts(products);
  refs.productsList.insertAdjacentHTML('beforeend', markup);
}
