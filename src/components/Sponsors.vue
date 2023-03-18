<script>
import Title from './Title.vue'
import Card from './Card.vue'

export default{
	components:{Title, Card}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "SPONSORS" color = "#dd6e42"/>
		<div :class = "`content`">
			<div :class = "'links'">
				<Card link = "src/assets/Decoherence.jpg" 
				size = "300px"/>
				<Card link = "src/assets/BioBlitz.jpg" size = "300px"/>
				<Card link = "src/assets/Chemenigma.jpg" size = "300px"/>
				<Card link = "src/assets/Enumeration.jpg" size = "300px"/>
				<Card link = "src/assets/Quadsparks.jpg" size = "300px"/>
				<Card link = "src/assets/BAH.jpg" size = "300px"/>
				<Card link = "src/assets/PIS.jpg" size = "300px"/>
				<Card link = "src/assets/Exhibitions.jpg" size = "300px"/>
			</div>
		<div :class = "`content`">
			No stuff
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
}
</style>