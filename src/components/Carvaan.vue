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
		<!--<Title text = "CARVAAN" color = "#4cc9f0"/>-->
		<div :class = "`content`">
			<div class = "car">
				<img src = "/img/carvaan/car.png" />
				<div class = "title">
					<h1>CARVAAN</h1>
					<button type = "submit" class = "btn btn-primary" @click = "transition">Learn More</button>
				</div>	
			</div>
		<div :class = "`after-transition`">	
			<div :class = "`description`">
				CARVAAN is Pravega’s ambitious new project, where we go to some of India’s biggest cities 
				and host offline prelims for our esteemed cultural events. With CARVAAN, our goal is to conquer 
				new horizons and provide more students the opportunity to express themselves via Pravega.
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
	</div>
</template>

<style scoped>
.btn {
  background-color: #4cc9f0;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.after-transition{
	display: none;
	transition: display 1s;
}
.car{
	position: relative;
	transition: display 1s;
}
.title{
	position: absolute;
	top: 30%;
	left: 30%;
	transform: translate(-50%, -50%);
	color: white;
	font-size: 3rem;
	font-family: 'Roboto', sans-serif;
}
	.car img{
		width: 100vw;
		height: auto;
		margin: 0px;
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
	width: 100%;
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