import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import HelloWorld from './components/HelloWorld.vue'
import RouteOne from './components/RouteOne.vue'
import RouteTwo from './components/RouteTwo.vue'
import RouteThree from './components/RouteThree.vue'
import RouteFour from './components/RouteFour.vue'

import '../public/style.scss' // global style
import '../public/icofont/icofont.min.css' // global font ico

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [

	{ path: '/', component: Home },
	{ path: '/about', component: About },
	{ path: '/hello-world', component: HelloWorld },
	{ path: '/route-1', component: RouteOne },
	{ path: '/route-2', component: RouteTwo },
	{ path: '/route-3', component: RouteThree },
	{ path: '/route-4', component: RouteFour },
	{ path: '*', redirect: '/' }

]

const router = new VueRouter ({
	routes,
	mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
