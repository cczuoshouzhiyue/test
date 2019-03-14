export default function (api) {
  return {
    getProductList: query => api.get('http://www.51hawk.com/fx/site/StoreManager/storeList', query)
  }
}
