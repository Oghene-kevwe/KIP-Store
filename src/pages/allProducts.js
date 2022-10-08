// global imports
import { getElement } from '../utils.js'
import '../toggleSidebar.js'
import '../cart/toggleCart.js'

// filter imports
import { setupSearch } from '../filters/search.js'
import { setupCagetories } from '../filters/categories.js'
import { priceFilter } from '../filters/price.js'

// specific imports
import {store} from '../store.js'
import { displayProducts } from '../displayProducts.js'

const loading = getElement('.section-loading')
displayProducts(store,getElement('.products-container'))
setupSearch(store)
setupCagetories(store)
priceFilter(store)

loading.style.display = 'none'
















