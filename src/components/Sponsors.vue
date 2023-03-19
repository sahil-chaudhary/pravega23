<script>
import Title from './Title.vue'
import Soon from './Soon.vue'
export default{
	components:{Title, Soon}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "SPONSORS" color = "#dd6e42"/>
		<div :class = "`content`">
			<Soon />
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