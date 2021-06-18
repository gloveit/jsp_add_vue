import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import index from '@/view/index.vue'
import selectPeople from './selectPeople'

let router = new VueRouter({
	mode: 'history',
  routes:[
		{
			path: "/index",
			name: "index",
			component: index,
			children: [
				...selectPeople
			]
		},
		{
			path: "",
			redirect: ()=> {
				return { name: 'selectPleple' }
			}
		}
	]
})

export default router