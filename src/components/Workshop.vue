<script>
import Title from './Title.vue'
import Soon from './Soon.vue'
export default{
	components:{Title, Soon}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "WORKSHOP" color = "#38d8a4"/>
		<div :class = "`content`">
			<Soon />
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
	top: 10vh;
	height: 90vh;
	position: relative;
}
</style>