import Index from './index.vue'
const UserRouters = {
  path: '/groupManager',
  component: Index,
  children: [
    {
      path: '/',
      component: Index,
      name: 'groupManager',
      meta: {
        title: '组合管理页面'
      }
    }
  ]
}
export default UserRouters
