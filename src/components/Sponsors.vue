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
			
			<div class = "big-text">
				OUR PREVIOUS <span class = "grad">SPONSORS</span>
			</div>

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
	
	border-top-left-radius: 25px;
}


.big-text{
	font-weight: bold;
	font-size: 50px;
	text-align: center;
	padding-left: 10px;
}
.grad{
  	background: -webkit-linear-gradient(45deg, #dd6e42, #3a0ca6);
  	-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;

}
</style>