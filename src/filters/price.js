import { displayProducts } from "../displayProducts.js";
import { getElement } from "../utils.js";

export const priceFilter = (store) => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  let maxPrice = store.map((item) => item.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice);
  // set price values
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceInput.value = maxPrice;
  priceValue.textContent = `Value : $${maxPrice}`;

  priceInput.addEventListener("input", function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value : $${value}`;

    let newStore = store.filter(item=>item.price<= value)
    displayProducts(newStore, getElement(".products-container"),true);
    if (newStore.length < 1) {
        const container = getElement(".products-container");
        container.innerHTML = `
        <h1 class='product-search-error-msg'>Sorry, no item matched your search</h1>
        `;
      }
  });
};
