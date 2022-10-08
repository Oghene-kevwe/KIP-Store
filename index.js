// global imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";

// specific imports
import { getElement } from "./src/utils.js";
import { fetchProducts } from "./src/fetchProducts.js";
import { setupStore, store } from "./src/store.js";
import { displayProducts } from "./src/displayProducts.js";

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    setupStore(products);
    // set featured products
    const uniqueItems = [];
    const featuredProducts = store.filter((item) => {
      const checkItem = uniqueItems.includes(item.category);
      if (!checkItem) {
        uniqueItems.push(item.category);
        return true;
      } else {
        return false;
      }
    });
    displayProducts(featuredProducts, getElement(".featured-items"));
  }
};

window.addEventListener("DOMContentLoaded", init);
