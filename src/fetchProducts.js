import { allProductsUrl } from "./utils.js"
export const fetchProducts = async ()=>{
    const response = await fetch(allProductsUrl).catch((err)=>{
        console.log(err);
    })
    if(response){
       return response.json()
    }
}










