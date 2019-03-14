import createAxios from '@/util/http.js'
import productAPI from '@/api/productList'
const api = createAxios()
const product = productAPI(api)

export {
  product
}
