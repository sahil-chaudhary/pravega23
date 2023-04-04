<script>
import Title from './Title.vue'
import Card from './Card.vue'
export default{
	components:{Title, Card}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "CULTURALS" color =  "#fff12d"/>
		<div :class = "`content`">
			<div :class = "'links'">
				<router-link to = "/carvaan/cities">
					<Card link = "img/culturals/BOB V1.jpg" size = "300px"/>
				</router-link>
				<router-link to = "/carvaan/cities">
					<Card link = "/img/culturals/Crescendo V1.jpg" size = "300px"/>
				</router-link>
				<router-link to = "/carvaan/cities">
					<Card link = "/img/culturals/Elegante V1.jpg" size = "300px"/>
				</router-link>
				<router-link to = "/carvaan/cities">
					<Card link = "/img/culturals/Lasya V1.jpg" size = "300px"/>
				</router-link>
				
				
				
				
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
	top: 10vh;
	position: relative;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	overflow-y: scroll;
}
.links{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	row-gap: 8px;
	padding: 20px;
}

</style>