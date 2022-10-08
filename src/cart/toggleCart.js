import { getElement } from "../utils.js";

const cartOverlay = getElement('.cart-overlay')
const cartClose = getElement('.cart-close')
const cartBtn = getElement('.cart-btn')

cartBtn.addEventListener("click",()=>{
    cartOverlay.classList.add('show')
})

cartClose.addEventListener("click",()=>{
    cartOverlay.classList.remove('show')
})

export const openCart = ()=>{
    cartOverlay.classList.add('show')
}








