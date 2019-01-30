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
        title: '超市'
      }
    }
  ]
}
export default UserRouters
