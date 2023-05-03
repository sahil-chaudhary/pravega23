import {createRouter, createWebHistory} from 'vue-router'
import Home from "../components/Home.vue"
import Carvaan from "../components/Carvaan.vue"
import Scitech from "../components/Scitech.vue"
import Culturals from "../components/Culturals.vue"
import Workshop from "../components/Workshop.vue"
import Merchandise from "../components/Merchandise.vue"
import Sponsors from "../components/Sponsors.vue"
import Contact from "../components/Contact.vue"
import Carvaan_registrations from "../components/carvaan/carvaan_register.vue"
import Register from "../components/carvaan/Register.vue"
import Register2 from "../components/aaghaz/aaghaaz_register.vue"
import Cities from "../components/carvaan/Cities.vue"
import Aaghaz from "../components/Aaghaz.vue"
import Sports from "../components/aaghaz/Sports.vue"
import scitech_template from "../components/scitech/template.vue"
const routes = [
	{path: "/", name: "Home", component: Home},
	{path: "/carvaan", name: "Carvaan", component: Carvaan},
	{path: "/scitech", name:"SciTech", component: Scitech},
	{path: "/cultural", name:"Culturals", component: Culturals},
	{path: "/workshop", name:"Workshop", component: Workshop},
	{path: "/merch", name:"Merchandise", component: Merchandise},
	{path: "/sponsors", name:"Sponsors", component: Sponsors},
	{path: "/contact", name: "Contact", component: Contact},
	{path: "/carvaan/cities", name:"Cities",component:Cities},
	{path: "/aaghaz", name:"Aaghaz", component: Aaghaz},
	{path: "/aaghaz/sports", name:"Sports", component: Sports},
	{path: "/carvaan/register", name:"Register",component:Register},
	{path: "/aaghaz/aaghaaz_register", name:"Register2",component:Register2},
	{path: "/scitech/template", name:"scitech_template",component:scitech_template},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router