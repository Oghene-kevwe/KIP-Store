import {addToLocalstorage,getFromLocalstorage} from './utils.js'

let store = getFromLocalstorage('storeItems');
 const setupStore = (products) => {
  store = products.map((product) => {
    const { id, price, image, title: name, category } = product;
    return { id, price, image, name, category };
  });
addToLocalstorage('storeItems',store)
};



const findProduct = (id)=>{
  const product = store.find((item)=>item.id == id)
  return product
}


export {
    setupStore,store,findProduct
}