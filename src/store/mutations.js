import * as types from './mutations-types'
const mutations = {
  [types.CHANGETYPE]: function (state, type) {
    state.type = type
  }
}
export default mutations
