<script>
import Title from '../Title.vue'
import Card2 from "../Card2.vue"

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

				<!--Our five main events under CARVAAN are:
				<ul>
					<li>Proscenium and Footprints: This theatre and street play event brings profound and engaging stories to vivid reality, leaving a mark on the viewers.</li>
					<li>Battle of Bands: This intense showdown between bands features electrifying performances in different genres.</li>
					<li>Lasya: A scintillating showcase of graceful dancing, this is a fiery battle of grace, finesse, and expressions. </li>
					<li>Elegante’: This dazzling fashion show event showcases novel and unique ideas by upcoming designers brought to life by skilled models.</li>
					<li>Crescendo: An exhilarating musical battle of vocalists and instrumentalists featuring a captivating medley of melodies.</li>
				</ul>
				<br>
			To learn in detail about all the events, click <a :href="`/pdf/CARVAAN.pdf`">here</a>. Below are the listed cities and dates for CARVAAN 2023. Hope to see you all during the prelims!
			</div>-->

			<div class = "links">
				<router-link to="/carvaan/register">
					<Card2 
					dataImage="/img/carvaan/bengaluru.jpg"
					size = "300px"
					title = "BANGALORE"
					hover = "20-21 May" />
				</router-link>

				<router-link to="/carvaan/register">
					<Card2 
					dataImage="/img/carvaan/ahmedabad2.jpg"
					size = "300px"
					title = "AHMEDABAD"
					hover = "3-4 June" />
				</router-link>

				<router-link to="/carvaan/register">
					<Card2 
					dataImage="/img/carvaan/delhi2.jpg"
					size = "300px"
					title = "DELHI"
					hover = "10-11 June"/>
				</router-link>

				<router-link to="/carvaan/register">
					<Card2 
					dataImage="/img/carvaan/kolkata2.jpg"
					size = "300px"
					title = "KOLKATA"
					hover = "17-18 June" />
				</router-link>

				<router-link to="/carvaan/register">
					<Card2 
					dataImage="/img/carvaan/bhubaneswar2.jpg"
					size = "300px"
					title = "BHUBANESHWAR"
					hover = "24-25 June" />
				</router-link>


				

				<router-link to="/carvaan/register">
					<Card2 
					dataImage="/img/carvaan/indore.jpg"
					size = "300px"
					title = "INDORE"
					hover = "1-2 July" />
				</router-link>

				<router-link to="/carvaan/register">
					<Card2 
					dataImage="/img/carvaan/hyderabad2.jpg"
					size = "300px"
					title = "HYDERABAD"
					hover = "8-9 July" />
				</router-link>
				
				<router-link to="/carvaan/register">
					<Card2 
					dataImage="/img/carvaan/chennai2.jpg"
					size = "300px"
					title = "CHENNAI"
					hover = "15-16 July" />
				</router-link>

				<router-link to="/carvaan/register">
					<Card2 
					href = "https://google.com"
					dataImage="/img/carvaan/mumbai2.jpg"
					size = "300px"
					title = "MUMBAI"
					hover = "19-20 August"/>
				</router-link>

				<div :class = "`description`">
					To learn in detail about all the events, click 
					<a :style = "`color: inherit;`" 
					class = "grad underline"
					:href="`/pdf/CARVAAN.pdf`" >here</a>. 
					Above are the listed cities and dates for <span class = "grad">CARVAAN 2023</span>. Hope to see you all during the prelims!
				</div>
			
			</div>
		</div>	
	</div>
</div>	
</template>

<style scoped>

.description{
	padding: 35px;
	color: black;
	font-size: 30px;
	font-family: 'Roboto', sans-serif;
}
	
.title-flex{
	display: flex;
	height: 90vh;
	width: 100vw;
}
.content{
	position: relative;
	top: 10vh;
	height: 90vh;
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
	padding: 16px;
}

	.grad{
	  	font-weight: bold;
      background-image: -webkit-linear-gradient(0deg, #f72585, #a92fde 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
	}
	.underline{
		text-decoration: underline;
		text-decoration-color: #a92fde;
	}
</style>