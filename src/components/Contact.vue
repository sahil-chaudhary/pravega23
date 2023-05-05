<script>
import Title from './Title.vue'
import Soon2 from './Soon2.vue'
import Card2 from "./Card2.vue"

export default{
	components:{Title, Soon2, Card2}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "CONTACT" color = "#4cc9f0"/>
		<div :class = "`content`">
			<div class = "description">
				
				<div class = "grad">
					Chief Coordinators
				</div>

				<div class ="flex">
					<Card2 
					dataImage="/img/people/Naman.jpeg"
					size = "250px"
					title = "Naman"
					hover = "6398667637
					 namans@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/Akshank.jpeg"
					size = "250px"
					title = "Akshank"
					hover = "7011358158 akshanktyagi@iisc.ac.in" />
				</div>
				<br/>
				<div class = "grad">
					Sponsorships
				</div>
				<div class ="flex">
					<Card2 
					dataImage="/img/people/Shreenabh.png"
					size = "250px"
					title = "Shreenabh"
					hover = "9022411269
					 shreenabhm@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/Tejus.jpg"
					size = "250px"
					title = "Tejus"
					hover = "8420942839 tejusrohatgi@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/Shreshth.jpg"
					size = "250px"
					title = "Shresth"
					hover = "7388058586 shreshthj@iisc.ac.in" />
					<Card2
					dataImage="/img/people/Jasnoor.jpg"
					size = "250px"
					title = "Jasnoor"
					hover = "6280918723 jasnoorsingh@iisc.ac.in" />
				</div>
				<br/>
				<div class = "grad">
					Cultural Events
				</div>
				<div class ="flex">
					<Card2 
					dataImage="/img/people/tanisha.jpg"
					size = "250px"
					title = "Tanisha"
					hover = "9890725310
					 tanishakumar@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/deepti.jpg"
					size = "250px"
					title = "Deepti"
					hover = "6370632574 deeptisahu@iisc.ac.in" />
				</div>
				<br/>
				<div class = "grad">
					Pronites
				</div>
				<div class ="flex">
					<Card2 
					dataImage="/img/people/unknown.jpeg"
					size = "250px"
					title = "Rohan"
					hover = "7081228530
					 krohan@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/jitu.jpg"
					size = "250px"
					title = "Jitendriya"
					hover = "9148518445 jitendriyap@iisc.ac.in" />
				</div>
				<br/>
				<div class = "grad">
					Merchandise
				</div>
				<div class ="flex">
					<Card2 
					dataImage="/img/people/Pugha.jpg"
					size = "250px"
					title = "Pugazhendi"
					hover = "7338981627
					 krohan@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/SANKALP.jpg"
					size = "250px"
					title = "Sankalp"
					hover = "9691664003 sankalps@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/unknown.jpeg"
					size = "250px"
					title = "Tejas"
					hover = "9920044090 tejasvinod@iisc.ac.in" />
				</div>
				<br/>
				<div class = "grad">
					Recreational Events
				</div>
				<div class ="flex">
					<Card2 
					dataImage="/img/people/Pushkal.jpg"
					size = "250px"
					title = "Pushkal"
					hover = "7065829055
					 pushkala@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/Sahil.png"
					size = "250px"
					title = "Sahil"
					hover = "8653280175 sahils@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/sanjith.jpg"
					size = "250px"
					title = "Sanjith"
					hover = "7824806236 sanjithc@iisc.ac.in" />
				</div>
				<br/>
				<div class = "grad">
					Logistics
				</div>
				<div class ="flex">
					<Card2 
					dataImage="/img/people/Naman.jpeg"
					size = "250px"
					title = "Satyadarshi"
					hover = "9709997353
					 kumarsatyada@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/vishal.jpg"
					size = "250px"
					title = "Vishal"
					hover = "9520464612 gaurvishal@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/vivek.jpg"
					size = "250px"
					title = "Vivek"
					hover = "6385491905 vivekkumarh@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/unknown.jpeg"
					size = "250px"
					title = "Adithya"
					hover = "7349672927 padithya@iisc.ac.in" />
				</div>
				<br/>
				<div class = "grad">
					Publicity
				</div>
				<div class ="flex">
					<Card2 
					dataImage="/img/people/Kartikay.jpg"
					size = "250px"
					title = "Kartikay"
					hover = "6378841075
					 kartikayv@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/AOmar.jpg"
					size = "250px"
					title = "Ashish"
					hover = "7754967066 ashishomar@iisc.ac.in" />
				</div>
				<br/>
				<div class = "grad">
					Scitech Events
				</div>
				<div class ="flex">
					<Card2 
					dataImage="/img/people/Krishna.jpg"
					size = "250px"
					title = "Krishna"
					hover = "88796 29440
					 krishnasb@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/Dhruba.jpg"
					size = "250px"
					title = "Dhruba"
					hover = "9051676010 dhrubadey@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/unknown.jpeg"
					size = "250px"
					title = "Debadrito"
					hover = "62914 68387 debadritoroy@iisc.ac.in" />
				</div>
				<br/>
				<div class = "grad">
					Workshop
				</div>
				<div class ="flex">
					<Card2 
					dataImage="/img/people/Aman.jpg"
					size = "250px"
					title = "Aman"
					hover = "9034240861
					 amangoyal@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/Rajvardhan.JPG"
					size = "250px"
					title = "Rajvardhan"
					hover = "7249220441 rajvardhans@iisc.ac.in"/>
					<Card2 
					dataImage="/img/people/SHIVAM.jpg"
					size = "250px"
					title = "Shivam"
					hover = "6202039625 shivamp@iisc.ac.in"/>
				</div>
				<br/>
				<div class = "grad">
					Website
				</div>
				<div class ="flex">
					<Card2 
					dataImage="/img/people/ssarma.jpg"
					size = "250px"
					title = "Soumyadeep"
					hover = "9820893746
					 ssoumyadeep@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/unknown.jpeg"
					size = "250px"
					title = "Priyanshu"
					hover = "9310177172 priyanshug@iisc.ac.in" />
				</div>
				<br/>
				<div class = "grad">
					Design
				</div>
				<div class ="flex">
					<Card2 
					dataImage="/img/people/Tirtha.JPG"
					size = "250px"
					title = "Tirtharenu"
					hover = "87923 73085
					 tirtharenuc@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/unknown.jpeg"
					size = "250px"
					title = "Dipayan"
					hover = "73629 65429 dipayandatta@iisc.ac.in" />
				</div>
				<br/>

				<div class = "grad">
					Content
				</div>
				<div class ="flex">
					<Card2 
					dataImage="/img/people/zenith.jpg"
					size = "250px"
					title = "Zenith"
					hover = "83065 78839
					 zenithm@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/diya.jpg"
					size = "250px"
					title = "Diya"
					hover = "8820188991 diyasarkar@iisc.ac.in" />
				</div>
				<br/>
				<div class = "grad">
					Finance
				</div>
				<div class ="flex">
					<Card2 
					dataImage="/img/people/pratik.jpg"
					size = "250px"
					title = "Pratik"
					hover = "9774755969
					 pratikb@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/jyotirmoy.jpg"
					size = "250px"
					title = "Jyotirmoy"
					hover = "7978789050 jyotirmoyb@iisc.ac.in" />
				</div>
				<br/>
				<div class = "grad">
					Decoration
				</div>
				<div class ="flex">
					<Card2 
					dataImage="/img/people/Oviya.jpg"
					size = "250px"
					title = "Oviya"
					hover = "8050700234
					 oviyag@iisc.ac.in" />
					<Card2 
					dataImage="/img/people/unknown.jpeg"
					size = "250px"
					title = "Sourabh"
					hover = "9182809934 sourabhp@iisc.ac.in" />
				</div>
				<br/>
				<div class = "grad">
					Accomodation
				</div>
				<div class ="flex">
					<Card2 
					dataImage="/img/people/unknown.jpeg"
					size = "250px"
					title = "Anmol"
					hover = "9485820001
					 anmol2021@iisc.ac.in" />
				</div>



				

			</div>
		</div>
	</div>
</template>

<style scoped>
	
.title-flex{
	display: flex;
	height: 90vh;
}
.flex{
	align-items: center;
	flex-wrap: wrap;
	display: flex;
}
.contact{
	display: flex;
	flex-direction: column;
	align-items: center;
}

.description{
	padding: 35px;
	color: black;
	font-size: 20px;
	font-family: 'Roboto', sans-serif;
}
.content{
	background-color: #eeeeee;
	height: 90vh;
	position: relative;
	top: 10vh;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	overflow-y: scroll;
	overflow-x: hidden;
}

.designation{
	text-align: center;

}
	.grad{
		text-align: center;
	font-size: 50px;
  	background: -webkit-linear-gradient(45deg, #4cc9f0, #fff12d);
  	-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
  	font-weight: bold;
	}
@media screen and (max-width: 1024px) {
	.flex{
		flex-wrap: wrap;
	}
	.contact{
		padding-bottom: 10vw;
	}
}
	

</style>