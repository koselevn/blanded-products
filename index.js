import"./assets/styles-JE8YjOlG.js";import{a as r}from"./assets/vendor-BkCUij8E.js";const d="https://dummyjson.com/",a={PRODUCTS:"products",PRODUCTS_BY_ID:"products/",CATEGORY:"products/category-list",PRODUCTS_BY_CATEGORY:"products/category/",PRODUCTS_SEARCH:"products/search"},c=12;r.defaults.baseURL=d;async function p(){const{data:t}=await r.get(`${a.CATEGORY}`);return t}async function l(t){const s=(t-1)*c,{data:o}=await r.get(`${a.PRODUCTS}?limit=${c}&skip=${s}`);return o}const n={productsList:document.querySelector(".products"),categoriesList:document.querySelector(".categories")};function _({id:t,title:s,category:o,thumbnail:e,price:i,brand:u}){return`
  <li class="products__item" data-id="${t}">
    <img class="products__image" src="${e}" alt="${s}"/>
    <p class="products__title">${s}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: </span>${u}</p>
    <p class="products__category">Category: ${o}</p>
    <p class="products__price">Price: $${i}</p>
 </li>
`}function g(t){return t.map(_).join("")}function m(t){const s=g(t);n.productsList.insertAdjacentHTML("beforeend",s)}function P(t){const o=["All",...t].map(e=>`
        <li class="categories__item">
          <button type="button" class="categories__btn">
            ${e}
          </button>
        </li>`).join("");n.categoriesList.innerHTML=o}let C=1;async function $(){try{const t=await p();P(t);const{products:s,total:o}=await l(C);m(s)}catch(t){console.error(`Error initalization home page: ${t}`)}}document.addEventListener("DOMContentLoaded",$);
//# sourceMappingURL=index.js.map
