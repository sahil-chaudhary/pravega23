<script>
import Title from './Title.vue'
import Card2 from "./Card2.vue"
export default{
	components:{Title, Card2}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "CARVAAN" color = "#4cc9f0"/>
		<div :class = "`content`">

			<div class = "links">

				<router-link to="/carvaan/mumbai">
					<Card2 
					href = "https://google.com"
					dataImage="/img/carvaan/mumbai.jpg"
					size = "300px"
					title = "Mumbai"
					hover = "20-21 May"
					v-bind:href="`/carvaan/mumbai`" />
				</router-link>

				<router-link to="/carvaan/ahmedabad">
					<Card2 
					dataImage="/img/carvaan/ahmedabad.jpg"
					size = "300px"
					title = "Ahmedabad"
					hover = "27-28 May" />
				</router-link>

				<router-link to="/carvaan/delhi">
					<Card2 
					dataImage="/img/carvaan/delhi.jpg"
					size = "300px"
					title = "Delhi"
					hover = "10-11 June"/>
				</router-link>
				

				<router-link to="/carvaan/kolkata">
					<Card2 
					dataImage="/img/carvaan/kolkata.jpg"
					size = "300px"
					title = "Kolkata"
					hover = "17-18 June" />
				</router-link>

				<router-link to="/carvaan/bhubaneswar">
					<Card2 
					dataImage="/img/carvaan/bhubaneshwar.jpg"
					size = "300px"
					title = "Bhubaneshwar"
					hover = "24-25 June" />
				</router-link>
				
				<router-link to="/carvaan/hyderabad">
					<Card2 
					dataImage="/img/carvaan/hyderabad.jpg"
					size = "300px"
					title = "Hyderabad"
					hover = "8-9 July" />
				</router-link>

				<router-link to="/carvaan/kochi">
					<Card2 
					dataImage="/img/carvaan/kochi.jpg"
					size = "300px"
					title = "Kochi"
					hover = "15-16 July" />
				</router-link>

				<router-link to="/carvaan/chennai">
					<Card2 
					dataImage="/img/carvaan/chennai.jpg"
					size = "300px"
					title = "Chennai"
					hover = "22-23 July" />
				</router-link>

				<router-link to="/carvaan/bengaluru">
					<Card2 
					dataImage="/img/carvaan/bangalore.jpg"
					size = "300px"
					title = "Bangalore"
					hover = "19-20 August" />
				</router-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
	
.title-flex{
	display: flex;
	height: 90vh;
}
.content{
	background-color: #eeeeee;
	height: auto;
	border-top-left-radius: 25px;
	overflow-y: scroll;
	color: #eeeeee;
}

.links{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	row-gap: 8px;
	padding-top: 8px;
}
</style>