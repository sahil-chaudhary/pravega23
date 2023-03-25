<script>
import Title from '../Title.vue'
import Soon from '../Soon.vue'
export default{
	components:{Title, Soon}
}
</script>

<template>
<div :class = "`title-flex`">
		<Title text = "DELHI" color = "#dd6e42"/>
		<div :class = "`content`">
			<p :class="`battleofbands`">
                <u>Battle Of Bands</u>
            </p>
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
	width: 75vw;
}
.battleofbands{
   color:black;
   font-size:x-large;
   text-align: center;
}
</style>