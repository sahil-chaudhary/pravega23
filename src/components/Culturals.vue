<script>
import Title from './Title.vue'
import Soon from './Soon.vue'
export default{
	components:{Title, Soon}
}
</script>


<template>

	<div :class = "`title-flex`">
		<Title text = "CULTURALS" color = "#fff12d"/>
		
		<div :class = "`content`">
			<Soon/>
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


</style>