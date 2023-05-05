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
			AAGHAAZ
			<div>
				19-21 MAY 2023
			</div>
		</div>
		<div class = "desc">
				Start your journey to greatness and ignite the fire within at "Aaghaz" the inter-college sports fest that marks the beginning of your path towards sporting excellence
		</div>

		<div class = "learn">
			<router-link to="/aaghaz/sports" :style="`text-decoration: none; color: inherit;`">
				LEARN MORE
			</router-link>
		</div>

	</div>
</template>

<style scoped>
	.carvaan-title{
		color: black;
	}
	.desc{
		color: #333333;
	}
.landing{
      position: absolute;
      top: 0;
      height: 100vh;
      width: 100vw;
      background-image: url("/img/aaghaz/aaghaz.png");
      background-position: 25% 40%;
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
	font-size: 75px;
}
.carvaan-title div{
	font-size: 40px;
}
.desc{
	padding-top: 10px;
	padding-bottom: 20px;
	width: 35vw;
}
.learn{
	cursor: pointer;
	font-weight: bold;
	background-color: red;
	width: fit-content;
	padding: 10px;
	font-size: 1.5em;
}


  @media screen and (max-width: 1024px) {
  	.landing{
  		background-position: 25% 100%;
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