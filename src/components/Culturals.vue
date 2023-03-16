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
	width: 75vw;
	z-index: 4;
}


</style>