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
				<Card link = "/img/scitech/Decoherence.jpg" size = "300px"/>
				<Card link = "/img/scitech/BioBlitz.jpg" size = "300px"/>
				<Card link = "/img/scitech/Chemenigma.jpg" size = "300px"/>
				<Card link = "/img/scitech/Enumeration.jpg" size = "300px"/>
				<Card link = "/img/scitech/Quadsparks.jpg" size = "300px"/>
				<Card link = "/img/scitech/BAH.jpg" size = "300px"/>
				<Card link = "/img/scitech/PIS.jpg" size = "300px"/>
				<Card link = "/img/scitech/Exhibitions.jpg" size = "300px"/>
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
	height: 90vh;
	position: relative;
	top: 10vh;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	overflow-y: scroll;
}
.links{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	row-gap: 8px;
	padding-top: 8px;
}

</style>