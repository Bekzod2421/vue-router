import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '../views/Product/Product.vue'
import ProductDesc from '../views/Product/ProductDesc.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	},
	{
		path: '/product',
		name: 'product',
		component: Product
	},
	{
		path: '/product/:id',
		name: 'ProductDesc',
		component: ProductDesc
	},
	// redirect router
	{
		path: '/salom',
		redirect: '/about'
	},
	// not Found router
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: () => import("../views/NotFound.vue")
	}

]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
