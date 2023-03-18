import {createRouter, createWebHistory} from 'vue-router'

import Home from "../components/Home.vue"
import Carvaan from "../components/Carvaan.vue"
import Scitech from "../components/Scitech.vue"
import Culturals from "../components/Culturals.vue"
import Workshop from "../components/Workshop.vue"
import Merchandise from "../components/Merchandise.vue"
import Sponsors from "../components/Sponsors.vue"
import Contact from "../components/Contact.vue"
import delhi_forms from "../components/cities/delhi.vue"
import mumbai_forms from "../components/cities/mumbai.vue"
import aheme_forms from "../components/cities/ahme.vue"
import kochi_forms from "../components/cities/kochi.vue"
import bhub_forms from "../components/cities/bhub.vue"
import bang_forms from "../components/cities/bangalore.vue"
import chennai_forms from "../components/cities/chennai.vue"
import hyder_forms from "../components/cities/hyder.vue"
import kolkata_forms from "../components/cities/kolkata.vue"

const routes = [
	{path: "/", name: "Home", component: Home},
	{path: "/carvaan", name: "Carvaan", component: Carvaan},
	{path: "/scitech", name:"SciTech", component: Scitech},
	{path: "/cultural", name:"Culturals", component: Culturals},
	{path: "/workshop", name:"Workshop", component: Workshop},
	{path: "/merch", name:"Merchandise", component: Merchandise},
	{path: "/sponsors", name:"Sponsors", component: Sponsors},
	{path: "/contact", name: "Contact", component: Contact},
	{path:"/carvaan/delhi",name:"forms-Delhi",component:delhi_forms},
	{path:"/carvaan/mumbai",name:"forms-mumbai",component:mumbai_forms},
	{path:"/carvaan/ahemedabad",name:"forms-ahme",component:aheme_forms},
	{path:"/carvaan/kochi",name:"forms-kochi",component:kochi_forms},
	{path:"/carvaan/bhubaneshwar",name:"forms-bhub",component:bhub_forms},
	{path:"/carvaan/bangalore",name:"forms-bang",component:bang_forms},
	{path:"/carvaan/chennai",name:"forms-chennai",component:chennai_forms},
	{path:"/carvaan/hyderabad",name:"forms-hyder",component:hyder_forms},
	{path:"/carvaan/kolkata",name:"forms-kolk",component:kolkata_forms}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router