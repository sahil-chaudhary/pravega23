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
				<Card link = "src/assets/Decoherence.jpg" size = "300px"/>
				<Card link = "src/assets/BioBlitz.jpg" size = "300px"/>
				<Card link = "src/assets/Chemenigma.jpg" size = "300px"/>
				<Card link = "src/assets/Enumeration.jpg" size = "300px"/>
				<Card link = "src/assets/Quadsparks.jpg" size = "300px"/>
				<Card link = "src/assets/BAH.jpg" size = "300px"/>
				<Card link = "src/assets/PIS.jpg" size = "300px"/>
				<Card link = "src/assets/Exhibitions.jpg" size = "300px"/>
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
	width: 75vw;
	height: auto;
	border-top-left-radius: 25px;
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