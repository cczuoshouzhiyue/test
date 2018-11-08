import Vue from 'vue'

Vue.directive('cfocus', {
  inserted: function (el) {
    let parentDom = el.parentElement
    el.style.width = parentDom.clientWidth + 'px'
    el.style.height = (parentDom.clientHeight || '400') + 'px'
  }
})
