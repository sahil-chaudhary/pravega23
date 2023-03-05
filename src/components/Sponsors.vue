<script>
import Title from './Title.vue'

export default{
	components:{Title}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "SPONSORS" color = "#dd6e42"/>
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