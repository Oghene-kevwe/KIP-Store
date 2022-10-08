import { addToCart } from "./cart/setupCart.js";
import { getElement } from "./utils.js";

export const displayProducts = (products, element, filters) => {
  element.innerHTML = products
    .map((item) => {
      const { id, image, price, name } = item;
      return `
    <div class=' featured-items-container'>
<div class="featured-items-info">
<div class='product-img-cont'>
<img src="${image}" alt="${name}" class="product-img">
</div>
  
   <div class=" product-link-and-btn-container">
  
    <a href="singleProduct.html" class=" single-product-link " data-id="${id}">
      <i class="fas fa-search"></i>
    </a>
    
    <button class="product-cart-btn" data-id="${id}">
      <i class="fas fa-shopping-cart"></i>
    </button>
  </div>
</div>
<footer class="product-footer">
  <div class='product-name' >${name}</div>
  <div class=" product-price">$${price}</div>
</footer>
</div>
    `;
    })
    .join("");

  if (filters) return;

  // Add to cart function
  element.addEventListener("click", function (e) {
    const btn = e.target.parentElement;
    if (btn.classList.contains("product-cart-btn")) {
      addToCart(btn.dataset.id);
    }
  });

  // Add Url productID to localstorage function
  const productLinks = document.querySelectorAll(".single-product-link");
  productLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      localStorage.setItem("productID", e.currentTarget.dataset.id);
    });
  });
};
