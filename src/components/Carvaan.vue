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
	<div class = "landing">
	</div>
</template>

<style scoped>

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