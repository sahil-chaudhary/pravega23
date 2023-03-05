<script>
import Title from './Title.vue'
import Card from './Card.vue'
export default{
	components:{Title, Card}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "SCITECH" color = "#f72585"/>
		<div :class = "`content`">
			<div :class = "'links'">
				<Card link = "src/assets/Decoherence.jpg" 
				size = "350px"/>
				<Card link = "src/assets/BioBlitz.jpg" size = "350px"/>
				<Card link = "src/assets/Chemenigma.jpg" size = "350px"/>
				<Card link = "src/assets/Enumeration.jpg" size = "350px"/>
				<Card link = "src/assets/Quadsparks.jpg" size = "350px"/>
				<Card link = "src/assets/BAH.jpg" size = "350px"/>
				<Card link = "src/assets/PIS.jpg" size = "350px"/>
				<Card link = "src/assets/Exhibitions.jpg" size = "350px"/>
			</div>
		</div>
	</div>
</template>

<style>

.title-flex{
	display: flex;
	height: 200vh;
}
.content{
	background-color: #eeeeee;
	width: 75vw;
	height: auto;

	overflow-y: scroll;
}
.links{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	row-gap: 8px;
	padding-top: 8px;
}
.links > div{
}
</style>