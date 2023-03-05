<script>
import Title from './Title.vue'

export default{
	components:{Title}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "WORKSHOP" color = "#38d8a4"/>
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