<script>
import Title from './Title.vue'

export default{
	components:{Title}
}
</script>

<template>
	<div :class = "`title-flex`">
		<Title text = "CULTURALS" color = "#fff12d"/>
		<div :class = "`content`">
			stuff
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
}
</style>