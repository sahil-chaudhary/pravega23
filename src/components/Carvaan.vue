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
				<Card2 
				dataImage="/src/assets/mumbai.jpg"
				size = "300px"
				title = "Mumbai"
				hover = "20-21 May"
				v-bind:href="`/carvaan/mumbai`" />

				<Card2 
				dataImage="/src/assets/ahmedabad.jpg"
				size = "300px"
				title = "Ahmedabad"
				hover = "27-28 May" />

				<a :href="`/carvaan/delhi`"><Card2 
				dataImage="/src/assets/delhi.jpg"
				size = "300px"
				title = "Delhi"
				hover = "10-11 June"/></a>

				<Card2 
				dataImage="/src/assets/kolkata.jpg"
				size = "300px"
				title = "Kolkata"
				hover = "17-18 June" />

				<Card2 
				dataImage="/src/assets/bhubaneshwar.jpg"
				size = "300px"
				title = "Bhubaneshwar"
				hover = "24-25 June" />

				<a :href="`/carvaan/hyderabad`"><Card2 
				dataImage="/src/assets/hyderabad.jpg"
				size = "300px"
				title = "Hyderabad"
				hover = "8-9 July" /></a>

				<Card2 
				dataImage="/src/assets/kochi.jpg"
				size = "300px"
				title = "Kochi"
				hover = "15-16 July" />

				<Card2 
				dataImage="/src/assets/chennai.jpg"
				size = "300px"
				title = "Chennai"
				hover = "22-23 July" />

				<Card2 
				dataImage="/src/assets/bangalore.jpg"
				size = "300px"
				title = "Bangalore"
				hover = "19-20 August" />

			</div>
		</div>
	</div>
</template>

<style>
	
.title-flex{
	display: flex;
	height: 90vh;
}
.content{
	background-color: #eeeeee;
	width: 75vw;
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