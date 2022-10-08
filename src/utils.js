const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`please check element, ${selection} does not exists`);
  }
};

const allProductsUrl = "https://fakestoreapi.com/products";
const singleProductUrl = 'https://fakestoreapi.com/products/'

// get from localstorage
const getFromLocalstorage = (item)=>{
  let storageItems = localStorage.getItem(item)
  if(storageItems){
    storageItems = JSON.parse(localStorage.getItem(item))
}else{
  storageItems = []
}
return storageItems
}


// add to localstorage
const addToLocalstorage = (name,item)=>{
  localStorage.setItem(name,JSON.stringify(item))
}

// format price
const formatPrice = (price)=>{
  const formattedPrice = new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD'
  }).format((price).toFixed(2))
  return formattedPrice
}


export{
  getElement,allProductsUrl,addToLocalstorage,getFromLocalstorage,singleProductUrl,formatPrice
}