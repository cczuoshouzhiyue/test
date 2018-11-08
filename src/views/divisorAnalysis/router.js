import Index from './index.vue'
const UserRouters = {
  path: '/divisorAnalysis',
  component: Index,
  children: [
    {
      path: '/',
      component: Index,
      name: 'divisorAnalysis',
      meta: {
        title: '超市'
      }
    }
  ]
}
export default UserRouters
