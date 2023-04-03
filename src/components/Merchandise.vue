<script>
import Title from './Title.vue'
import Soon from './Soon.vue'
export default{
	components:{Title, Soon}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "MERCH" color = "#7bff28"/>
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
	height: 98vh;
	position: relative;
	top: 90px;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	overflow-y: scroll;
}
</style>