import selectPeople from '@/view/selectPeople'

const routes = [
    {
			path: '/selectPleple',
			name: 'selectPleple',
			component: selectPeople,
			meta: { 
				requiresAuth: true 
			}
    }
]

export default routes