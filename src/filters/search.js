import { getElement } from "../utils.js";
import { displayProducts } from "../displayProducts.js";

export const setupSearch = (store) => {
  const form = getElement(".search-form");
  const searchInput = getElement(".search-input");

  form.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();
    if (value) {
      const newStore = store.filter((item) => {
        let { name } = item;
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return item;
        }
      });
      displayProducts(newStore, getElement(".products-container"),true);

      if (newStore.length < 1) {
        const container = getElement(".products-container");
        container.innerHTML = `
        <h1 class='product-search-error-msg'>Sorry, no item matched your search</h1>
        `;
      }
    } else {
      displayProducts(store, getElement(".products-container"),true);
    }
  });
};
