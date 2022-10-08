import { getElement } from "../utils.js";

const cartDom = getElement('.cart-items')

export const addCartToDom = ({ image, price, name, amount, id }) => {
  const article = document.createElement("article");
  article.classList.add("cart-item");
  article.setAttribute("data-id", id);
  article.innerHTML = `
  <img
src="${image}"
class="cart-item-img"
alt="${name}"
/>
<div class="cart-product-info">
<h4 class="cart-item-name">${name}</h4>
<p class="cart-item-price">$${price}</p>
<button class="cart-item-remove-btn" data-id="${id}">remove</button>
</div>

<div class="cart-btns-container">
<button
  class="cart-item-increase-btn" data-id="${id}"
>
  <i class="fas fa-chevron-up"></i>
</button>
<p class="cart-item-amount" data-id="${id}">${amount}</p>
<button
  class="cart-item-decrease-btn text-xl" data-id="${id}"
>
  <i class="fas fa-chevron-down"></i>
</button>
</div>
  `;
cartDom.appendChild(article)
};
