import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import { addCartToDom } from "./addCartToDom.js";

// specific imports
import {
  getFromLocalstorage,
  addToLocalstorage,
  getElement,
  formatPrice,
} from "../utils.js";

const cartCounterDom = getElement(".cart-counter");
const cartItemsDom = getElement(".cart-items");
const cartTotalDom = getElement(".cart-total");
const cartMsg = getElement('.empty-cart-msg')


let cart = getFromLocalstorage("cart");
export const addToCart = (id) => {
  let checkItem = cart.find((item) => item.id == id);
  if (!checkItem) {
    let product = findProduct(id);
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    // add cartitem to DOM
    addCartToDom(product);
    cartMsg.style.display = 'none'
    
  } else {
    // Update values
    const amount = increaseAmount(id);
    const items = [...cartItemsDom.querySelectorAll(".cart-item-amount")];
    const newAmount = items.find((value) => value.dataset.id == id);
    newAmount.textContent = amount;
  }
  // set item to local storage
  addToLocalstorage("cart", cart);
  // calculate cart totals
  calculateCartTotal();
  // display cart counter amount
  displayCartCounter();
  openCart();
};

// increase Amount
function increaseAmount(id) {
  let newAmount;
  cart = cart.map((item) => {
    if (item.id == id) {
      newAmount = item.amount + 1;
      item = { ...item, amount: newAmount };
    }
    return item;
  });
  return newAmount;
}

// Decrease Amount
function decreaseAmount(id) {
  let newAmount;
  cart = cart.map((item) => {
    if (item.id == id) {
      newAmount = item.amount - 1;
      item = { ...item, amount: newAmount };
    }
    return item;
  });
  return newAmount;
}

// displayCartCounter
function displayCartCounter() {
  const counterAmount = cart.reduce((total, item) => {
    return (total += item.amount);
  }, 0);
  cartCounterDom.textContent = counterAmount;
}

// calculate total of cart amount
function calculateCartTotal() {
  const total = cart.reduce((total, item) => {
    return (total += item.price * item.amount);
  }, 0);
  cartTotalDom.textContent = `Total : ${formatPrice(total)}`;
}

// Add all cart items to DOM
function addAllCartItemsToDOM() {
  cart.forEach((item) => {
    addCartToDom(item);
  });
}

// remove Item
function removeItem(id) {
  cart = cart.filter((item) => item.id != id);
}

// cartDOM functionalities
function cartFunctionalities() {
  
  

  cartItemsDom.addEventListener("click", (e) => {
    const element = e.target;
    const parent = e.target.parentElement;
    const elementID = e.target.dataset.id;
    const parentID = e.target.parentElement.dataset.id;

    if (element.classList.contains("cart-item-remove-btn")) {
      removeItem(elementID);
      parent.parentElement.remove();
    }
    if (parent.classList.contains("cart-item-increase-btn")) {
      const amount = increaseAmount(parentID);
      parent.nextElementSibling.textContent = amount;
    }
    if (parent.classList.contains("cart-item-decrease-btn")) {
      const amount = decreaseAmount(parentID);
      if (amount === 0) {
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      } else {
        parent.previousElementSibling.textContent = amount;
      }
    }
     
    if(cart.length <1){
      cartMsg.style.display = 'grid'
    }

    calculateCartTotal();
    displayCartCounter();
    addToLocalstorage("cart", cart);
  });
  
}
console.log(cartItemsDom.children.length);

const init = () => {
  addAllCartItemsToDOM();
  calculateCartTotal();
  displayCartCounter();
  cartFunctionalities();
};
init();
