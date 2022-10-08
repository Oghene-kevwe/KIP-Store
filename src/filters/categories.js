import { getElement } from "../utils.js";
import { displayProducts } from "../displayProducts.js";

export const setupCagetories = (store) => {
  const categories = [
    "all",
    ...new Set(
      store.map((item) => {
        return item.category;
      })
    ),
  ];
  const categoryDom = getElement(".category");
  categoryDom.innerHTML = categories
    .map((item) => {
      return `
        <button class='category-btn'>${item}</button>
        `;
    })
    .join("");
  categoryDom.addEventListener("click", (e) => {
    const btn = e.target;
    if (btn.classList.contains("category-btn")) {
      let newStore = [];
      if (btn.textContent === "all") {
        newStore = [...store];
      } else {
        newStore = store.filter((item) => {
          return item.category === btn.textContent;
        });
      }
      displayProducts(newStore, getElement(".products-container"),true);
    }
  });
};
