<script>
import Title from './Title.vue'
import Card2 from "./Card2.vue"

export default{
	components:{Title, Card2},
	methods:{
	transition(){
		document.querySelector(".after-transition").style.display = "block";
	}
}
}

</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "CARVAAN" color = "#4cc9f0"/>

		<div :class = "`content`">
			<div :class = "`description`">
				Carvaan is a debut project by Pravega aimed at increasing outreach for our cultural events. As a part of Carvaan, Pravega will travel to some of India’s biggest cities- opening new doors of opportunities for thousands of students. Offline prelims will be conducted for our flagship battles in Singing, Dancing, Painting, and more. Selected participants from all over India will then collect at our campus in Bengaluru for a thrilling final. 
				<br><br>

				Our four main events under CARVAAN are:
				<ul>
					<li>Proscenium and Footprints: The stage and street play event of Pravega</li>
					<li>Battle of Bands: No introduction needed of course! </li>
					<li>Lasya: The dance event of pravega</li>
					<li>Elegante: The fashion event of pravega</li>
					<li>Crescendo: The music event for pravega</li>
				</ul>	
				<br>
			To learn in detail about all the events, click <a :href="`src/assets/CARVAAN.pdf`">here</a>. Below are the listed cities and dates for CARVAAN 2023. Hope to see you all during the prelims!
			</div>

			<div class = "links">

				<router-link to="/carvaan/mumbai">
					<Card2 
					href = "https://google.com"
					dataImage="/img/carvaan/mumbai2.jpg"
					size = "300px"
					title = "MUMBAI"
					hover = "20-21 May"
					v-bind:href="`/carvaan/mumbai`" />
				</router-link>

				<router-link to="/carvaan/ahmedabad">
					<Card2 
					dataImage="/img/carvaan/ahmedabad2.jpg"
					size = "300px"
					title = "AHMEDABAD"
					hover = "27-28 May" />
				</router-link>

				<router-link to="/carvaan/delhi">
					<Card2 
					dataImage="/img/carvaan/delhi2.jpg"
					size = "300px"
					title = "DELHI"
					hover = "10-11 June"/>
				</router-link>
				

				<router-link to="/carvaan/kolkata">
					<Card2 
					dataImage="/img/carvaan/kolkata2.jpg"
					size = "300px"
					title = "KOLKATA"
					hover = "17-18 June" />
				</router-link>

				<router-link to="/carvaan/bhubaneswar">
					<Card2 
					dataImage="/img/carvaan/bhubaneswar2.jpg"
					size = "300px"
					title = "BHUBANESHWAR"
					hover = "24-25 June" />
				</router-link>
				
				<router-link to="/carvaan/hyderabad">
					<Card2 
					dataImage="/img/carvaan/hyderabad2.jpg"
					size = "300px"
					title = "HYDERABAD"
					hover = "8-9 July" />
				</router-link>

				<router-link to="/carvaan/kochi">
					<Card2 
					dataImage="/img/carvaan/indore.jpg"
					size = "300px"
					title = "INDORE"
					hover = "15-16 July" />
				</router-link>

				<router-link to="/carvaan/chennai">
					<Card2 
					dataImage="/img/carvaan/chennai2.jpg"
					size = "300px"
					title = "CHENNAI"
					hover = "22-23 July" />
				</router-link>

				<router-link to="/carvaan/bengaluru">
					<Card2 
					dataImage="/img/carvaan/bengaluru.jpg"
					size = "300px"
					title = "BANGALORE"
					hover = "19-20 August" />
				</router-link>
			</div>
		</div>	
	</div>
</template>

<style scoped>
body{
	background-image: url("/img/home/landing.PNG");
      background-size: 130%;
      background-position: center;
      filter: brightness(0.3);

}
.description{
	padding: 16px;
	color: black;
	font-size: large;
	font-family: 'Roboto', sans-serif;
}
	
.title-flex{
	display: flex;
	height: 90vh;
	width: 100vw;
}
.content{
	background-color: #eeeeee;
	height: auto;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
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