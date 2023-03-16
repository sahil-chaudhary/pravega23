import {createRouter, createWebHistory} from 'vue-router'

import Home from "../components/Home.vue"
import Carvaan from "../components/Carvaan.vue"
import Scitech from "../components/Scitech.vue"
import Culturals from "../components/Culturals.vue"
import Workshop from "../components/Workshop.vue"
import Merchandise from "../components/Merchandise.vue"
import Sponsors from "../components/Sponsors.vue"
import Contact from "../components/Contact.vue"
const routes = [
	{path: "/", name: "Home", component: Home},
	{path: "/carvaan", name: "Carvaan", component: Carvaan},
	{path: "/scitech", name:"SciTech", component: Scitech},
	{path: "/cultural", name:"Culturals", component: Culturals},
	{path: "/workshop", name:"Workshop", component: Workshop},
	{path: "/merch", name:"Merchandise", component: Merchandise},
	{path: "/sponsors", name:"Sponsors", component: Sponsors},
	{path: "/contact", name: "Contact", component: Contact}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router