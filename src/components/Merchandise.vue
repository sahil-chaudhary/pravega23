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

<style>
</style>