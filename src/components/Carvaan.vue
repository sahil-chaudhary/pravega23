<script>
import Title from './Title.vue'
import Card2 from "./Card2.vue"

export default{
	components:{Title, Card2},
	methods:{
	transition(){
		document.querySelector(".after-transition").style.display = "block";
	}
}
}

</script>
<template>
	<div class = "landing">
	</div>
</template>

<style scoped>
.landing{
      position: absolute;
      top: 0;
      height: 100vh;
      width: 100vw;
      background-image: url("/img/carvaan/carvaanlanding.png");
      background-position: 50% 80%;
      background-size: cover;
      filter: brightness(1);
      overflow: visible;
    }
</style>