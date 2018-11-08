import Index from './index.vue'
const UserRouters = {
  path: '/divisorStore',
  component: Index,
  children: [
    {
      path: '/',
      component: Index,
      name: 'divisorStore',
      meta: {
        title: '因子超市'
      }
    }
  ]
}
export default UserRouters
