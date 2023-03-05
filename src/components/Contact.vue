<script>
import Title from './Title.vue'

export default{
	components:{Title}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "CONTACT US" color = "#4cc9f0"/>
		<div :class = "`content`">
			stuff
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