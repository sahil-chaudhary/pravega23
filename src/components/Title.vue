<script>
export default{
	props: {
		color: String,
		text: String
	}
}
</script>

<template>
<div :class = "`title`">
	<div :class = "`text`">
		{{text}}
	</div>
	<div :class = "`text transluscent`">
		{{text}}
	</div>
</div>
</template>

<style scoped>
.title{
	--theme-color: v-bind("color");
	background-image: linear-gradient(to top, var(--theme-color) -10%, #3a0ca6 60%);
	width: 25vw;
	color: var(--theme-color);
}
.text{
	position: absolute;
	text-align: center;
	transform-origin: bottom left;
	transform: rotate(-90deg);
	top: 70%;
	left: 25vw;
	font-size: 5em;
	letter-spacing: -5px;
	font-weight: bolder;
}
.transluscent{
	left: 23vw;
	opacity:  0.33;
}
</style>