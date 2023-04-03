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
	<div class = "landing-content">
		<div class = "carvaan-title">
			CARVAAN
		</div>

		<div class = "desc">
			Carvaan is a debut project by Pravega through which we bring our flagship cultural events to some of India’s biggest cities, where offline prelims will be conducted for our Singing, Dancing, Fashion events, and more. Selected participants from all over India will then arrive at our campus in Bengaluru for a thrilling final.
		</div>

		<div class = "learn">
			<router-link to="/carvaan/cities" :style="`text-decoration: none; color: inherit;`">
				LEARN MORE...
			</router-link>
		</div>
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
      overflow: hidden;
    }

.landing-content{
	width: fit-content;
	left: 10vw;
	z-index: 10;
	text-align: justify;
	color: #eeeeee;
	position: relative;
	top: 25vh;
}
.carvaan-title{
	font-weight: bold;
	font-size: 50px;
}
.desc{
	padding-top: 10px;
	padding-bottom: 20px;
	width: 35vw;
}
.learn{
	cursor: pointer;
	font-weight: bold;
	transition: font-size 1s;
}

.learn:hover{
	font-size: 1.5em;
}

  @media screen and (max-width: 1024px) {
  	.landing{
  		background-position: 100% 100%;
  	}
  	.landing-content{
  		text-align: center;
  		top: 10vh;
  		left: 8px;

  	}
  	.desc{
  		width: 90vw;
  	}

  	}
</style>