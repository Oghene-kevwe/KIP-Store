// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

// specific imports
import { addToCart } from "../cart/setupCart.js";
import { getElement, singleProductUrl } from "../utils.js";

// selections
const loading = getElement(".section-loading");
const pageTitleDOM = getElement(".page-hero-title");
const imgDOM = getElement(".single-product-img");
const titleDOM = getElement(".single-product-title");
const categoryDOM = getElement(".single-product-category");
const priceDOM = getElement(".single-product-price");
const descDOM = getElement(".single-product-desc");
const cartBtn = getElement(".addToCartBtn");

// productId
let productId;

// when page loads
window.addEventListener("DOMContentLoaded", async function () {
  try {
    const urlID = localStorage.getItem("productID");
    const response = await fetch(`${singleProductUrl}${urlID}`);
    const data = await response.json();

    // grab data
    const { id, title: name, category, image, description: desc, price } = data;

    //  Add values
    productId = id;
    document.title = name;
    pageTitleDOM.textContent = `Home / ${name}`;
    imgDOM.src = image;
    titleDOM.textContent = name;
    categoryDOM.textContent = category;
    priceDOM.textContent = `$${price}`;
    descDOM.textContent = desc;
  } catch (error) {
    console.log(error);
  }

  // Add to cart function
  cartBtn.addEventListener("click", function () {
    addToCart(productId);
  });
});
