<script>

export default{
	props:{
		link: String,
		color: String,
		size: String
	}
}
</script>
<template>
	<div>
		<img :class="`card`" :src="link" :width="size"/>
	</div>
</template>

<style>

.card{
	--c-size: v-bind('size');
	width: var(--c-size);
	border-radius: 25px;
}
</style>