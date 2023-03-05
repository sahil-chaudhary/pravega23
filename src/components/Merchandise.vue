<script>
import Title from './Title.vue'

export default{
	components:{Title}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "MERCH" color = "#7bff28"/>
		<div :class = "`content`">
			stuff
		</div>
	</div>
</template>

<style>
</style>