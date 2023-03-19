<script>
export defaultn{
	props:{
		link: String,
		color: String,
		size: String
	},
	mounted(){
		this.width = parseInt(this.size, 10);
		this.height = this.width;
	},
	data(){
		return{
			width:0,
			height:0,
			mouseX:0,
			mouseY:0,
			mouseLeaveDelay: null
		}
	},
	computed:{
		mousePX(){
			return this.mouseX / this.width;
		},
		mousePY(){
			return this.mouseY / this.height;
		},
		cardStyle(){
			const rX = this.mousePX * 30;
			const rY = this.mousePY * -30;

			return {
				transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
			};
		}

	},

	methods: {
		handleMouseMove(e){
			var coords = this.$refs.card.getBoundingClientRect();
			this.mouseX = e.pageX - coords.left - this.width/2;
			this.mouseY = e.pageY - coords.top - this.height/2;
			//console.log("mouseXY: " + this.mouseX + " " + this.mouseY);
			console.log("pageXY: " + e.pageX + " " + e.pageY + " clientXY: " + coords.left + " " + coords.top);
			//console.log("width height: " + this.width + " " + this.height)
			//console.log("client: " + this.$refs.card.clientWidth + " " + this.$refs.card.clientHeight)

		},
		handleMouseEnter(){
			clearTimeout(this.mouseLeaveDelay);
		},
		handleMouseLeave(){
			this.mouseLeaveDelay = setTimeout(()=>{
				this.mouseX = 0;
				this.mouseY = 0;
			}, 100);
		}
	}
}
</script>
<template>
	<div 
	:class="'card-wrap'" 
	@mousemove="handleMouseMove"
	@mouseenter="handleMouseEnter"
	@mouseleave="handleMouseLeave"
	ref="card">
		<img :class="`card`" :src="link" :width="size" :style="cardStyle"/>
	</div>
</template>

<style scoped>

.card{
	--c-size: v-bind('size');
	width: var(--c-size);
	border-radius: 25px;
	box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, 
	inset #333 0 0 0 5px, 
	inset rgba(255,255,255, 0.5) 0 0 0 6px;

  	-webkit-transition: 1s ease-out;
  	transition: 1s ease-out;
}
.card-wrap{
	transform: perspective(800px);
	transform-style: preserve-3d;
	cursor: pointer;
}

.card-wrap:hover .card{
  	-webkit-transition: 0.6s ease-out,
    box-shadow 2s ease-out;
  	transition: 0.6s ease-out,
    box-shadow 2s ease-out;
  	box-shadow: rgba(255,255,255, 0.2) 0 0 40px 5px, 
  	white 0 0 0 1px,
   	rgba(0,0,0, 0.66) 0 30px 60px 0, 
   	inset #333 0 0 0 5px,
    inset white 1px 1px 1px 6px;
}



</style>