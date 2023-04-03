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
@keyframes appear100{
	0%{
		opacity: 0;
		top: 90%
	}
	100%{
		opacity: 1;
		top: 70%;
	}
}
@keyframes appear33{
	0%{
		left: 25vw;
		opacity: 0;
		top: 90%;
	}
	50%{
		opacity: 0.33;
		top: 70%;
		left: 25vw;
	}
	100%{
		left: 23vw;
	}
}
@keyframes slideInFromBottom{
	0%{
		top: 90%;
	}
	100%{
		top: 70%;
	}
}
@keyframes blurAppear{
	0%{
		left: 25vw;
	}
	100%{
		left: 23vw;
	}
}
.title{
	position: relative;
	top: 10vh;
	height: 90vh;
	--theme-color: v-bind("color");
	background-image: linear-gradient(to top, var(--theme-color) -10%, #000000 60%);
	background-image: linear-gradient(to top, var(--theme-color) -10%, #000000 50%);
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
	animation: 0.4s ease-out 0s 1 appear100;
}
.transluscent{
	left: 23vw;
	animation: 0.8s ease-out 0s 1 appear33;
	opacity:  0.33;
}
</style>