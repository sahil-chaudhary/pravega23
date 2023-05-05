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
import deco_register from "../components/scitech/deco_register.vue"
import chemenigma_register from "../components/scitech/chemenigma_register.vue"
import bioblitz_register from "../components/scitech/bioblitz_register.vue"
import bah_register from "../components/scitech/bah_register.vue"
import enumeration_register from "../components/scitech/enumeration_register.vue"
import exhibitions_register from "../components/scitech/exhibitions_register.vue"
import ideathon_register from "../components/scitech/ideathon_register.vue"
import pis_register from "../components/scitech/pis_register.vue"
/*import Delhi from "../components/carvaan/Delhi.vue"


import Mumbai from "../components/carvaan/Mumbai.vue"
import Ahmedabad from "../components/carvaan/Ahmedabad.vue"
import Kochi from "../components/carvaan/Kochi.vue"
import Bhubaneswar from "../components/carvaan/Bhubaneswar.vue"
import Bengaluru from "../components/carvaan/Bengaluru.vue"
import Chennai from "../components/carvaan/Chennai.vue"
import Hyderabad from "../components/carvaan/Hyderabad.vue"

import Kolkata from "../components/carvaan/Kolkata.vue"



import Kolkata from "../components/carvaan/Kolkata.vue"*/


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
	{path: "/scitech/deco_register", name:"deco_register",component:deco_register},
	{path: "/scitech/chemenigma_register", name:"chemenigma_register",component:chemenigma_register},
	{path: "/scitech/bioblitz_register", name:"bioblitz_register",component:bioblitz_register},
	{path: "/scitech/bah_register", name:"bah_register",component:bah_register},
	{path: "/scitech/enumeration_register", name:"enumeration_register",component:enumeration_register},
	{path: "/scitech/exhibitions_register", name:"exhibitions_register",component:exhibitions_register},
	{path: "/scitech/ideathon_register", name:"ideathon_register",component:ideathon_register},
	{path: "/scitech/pis_register", name:"pis_register",component:pis_register},
	
	
	/*{path:"/carvaan/mumbai",name:"Mumbai",component:Mumbai},
	{path:"/carvaan/ahmedabad",name:"Ahmedabad",component:Ahmedabad},
	{path:"/carvaan/kochi",name:"Kochi",component:Kochi},
	{path:"/carvaan/bhubaneswar",name:"Bhubaneswar",component:Bhubaneswar},
	{path:"/carvaan/bengaluru",name:"Bengaluru",component:Bengaluru},
	{path:"/carvaan/chennai",name:"Chennai",component:Chennai},
	{path:"/carvaan/hyderabad",name:"Hyderabad",component:Hyderabad},
	{path:"/carvaan/kolkata",name:"Kolkata",component:Kolkata},
	
	
	{path:"/carvaan/kolkata",name:"Kolkata",component:Kolkata}*/
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router