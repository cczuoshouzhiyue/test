import Index from './index.vue'
const UserRouters = {
  path: '/',
  component: Index,
  children: [
    {
      path: '/',
      component: Index,
      name: 'home',
      meta: {
        title: '首页'
      }
    }
  ]
}
export default UserRouters
