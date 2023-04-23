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
		<Title text = "AAGHAZ" color = "#4cc9f0"/>

		<div :class = "`content`">
			<div :class = "`description`">
					To learn in detail about all the events, click 
					<a :style = "`color: inherit;`" 
					class = "grad underline"
					:href="`/pdf/Aaghaz_brochure_2.pdf`" >here</a>
			</div> 

			<div class = "links">
				

				<router-link to="/aaghaz/aaghaaz_register">
					<Card2 
					dataImage="/img/aaghaz/athletics.jpg"
					size = "300px"
					title = "ATHLETICS"
					hover = "" />
				</router-link>

				<router-link to="/aaghaz/aaghaaz_register">
					<Card2 
					dataImage="/img/aaghaz/badminton.jpg"
					size = "300px"
					title = "BADMINTON"
					hover = "" />
				</router-link>

				<router-link to="/aaghaz/aaghaaz_register">
					<Card2 
					dataImage="/img/aaghaz/basketball.jpg"
					size = "300px"
					title = "BASKETBALL"
					hover = ""/>
				</router-link>

				<router-link to="/aaghaz/aaghaaz_register">
					<Card2 
					dataImage="/img/aaghaz/handball.jpg"
					size = "300px"
					title = "HANDBALL"
					hover = "17-18 June" />
				</router-link>

				<router-link to="/aaghaz/aaghaaz_register">
					<Card2 
					dataImage="/img/aaghaz/kabaddi.jpg"
					size = "300px"
					title = "KABADDI"
					hover = "" />
				</router-link>


				

				<router-link to="/aaghaz/aaghaaz_register">
					<Card2 
					dataImage="/img/aaghaz/tt.jpg"
					size = "300px"
					title = "TABLE TENNIS"
					hover = "" />
				</router-link>

				<router-link to="/aaghaz/aaghaaz_register">
					<Card2 
					dataImage="/img/aaghaz/ultimate.jpg"
					size = "300px"
					title = "ULTIMATE"
					hover = "" />
				</router-link>
				
				<router-link to="/aaghaz/aaghaaz_register">
					<Card2 
					dataImage="/img/aaghaz/volleyball.jpg"
					size = "300px"
					title = "VOLLEYBALL"
					hover = "" />
				</router-link>

				
			
			</div>
		</div>	
	</div>
</template>

<style scoped>

.description{
	padding: 20px;
	color: black;
	font-size: 25px;
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