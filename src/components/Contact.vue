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
				Some people whom you can contact incase of any queries:
				<br>
				<div class ="flex">
				<div class = "contact">
					<Card2 
					dataImage="/img/people/tanisha.jpg"
					size = "300px"
					title = "Tanisha"
					hover = "" />
					<br>
					<div class = "contact-name">
						9890725310
					</div>
					<div class = "contact-email">
						<a href="mailto: tanishakumar@iisc.ac.in">tanishakumar@iisc.ac.in</a>
					</div>
				</div>	
				<div class = "contact">
					<Card2 
					dataImage="/img/people/deepti.jpg"
					size = "300px"
					title = "Deepti"
					hover = "" />
					<br>
					<div class = "contact-name">
						6370632574
					</div>
					<div class = "contact-email">
						<a href="mailto: deeptisahu@iisc.ac.in">deeptisahu@iisc.ac.in</a>
					</div>
				</div>
				</div>

			<Soon2 />
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
	padding-top: 2vw;
	padding-left: 10vw;
	padding-right: 10vw;
	padding-bottom: 2vw;
	align-items: center;
	display: flex;
	gap: 10vw;
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
}

@media screen and (max-width: 1024px) {
	.flex{
		flex-direction: column;
	}
	.contact{
		padding-bottom: 10vw;
	}
}
	

</style>