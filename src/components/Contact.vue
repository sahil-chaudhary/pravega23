<script>
import Title from './Title.vue'
import Soon2 from './Soon2.vue'
export default{
	components:{Title, Soon2}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "CONTACT" color = "#4cc9f0"/>
		<div :class = "`content`">
			<div class = "description">
				Some people whom you can contact incase of any queries:
				<br>
				<ul>
					<li>Tanisha Kumar: +91 9890725310 , <a href="tanishakumar@iisc.ac.in">tanishakumar@iisc.ac.in</a></li>
					<li>Deepti Sahu: +91 6370632574, <a href="deeptisahu@iisc.ac.in">deeptisahu@iisc.ac.in</a></li>
				</ul>	
			</div>

			<Soon2 />
		</div>
	</div>
</template>

<style scoped>
	
.title-flex{
	display: flex;
	height: 90vh;
}

.description{
	padding: 35px;
	color: black;
	font-size: 20px;
	font-family: 'Roboto', sans-serif;
}
.content{
	background-color: #eeeeee;
	height: 90vh;
	position: relative;
	top: 10vh;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	overflow-y: scroll;
}
</style>