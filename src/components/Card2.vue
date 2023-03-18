<script>
export default{
	props:{
		link: String,
		color: String,
		size: String,
		dataImage: String,
		title: String,
		hover: String
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
		},
		cardBgTransform(){
			const tX  = this.mousePX * 40;
			const tY = this.mousePY * -40;
			return {
				transform: `translateX(${tX}px) translateY(${tY}px)`
			}
		},
		cardBgImage(){
			return {
				backgroundImage: `url(${this.dataImage})`
			}
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
		<div 
		:class="`card`"
		:style="cardStyle">
			<div 
			:class = "`card-bg`"
			:style = "[cardBgImage, cardBgTransform]"
			>
			</div>

			<div :class = "`card-info`">
				<h1 :style = "`color:${this.color} `">{{title}} </h1>
				<p>{{hover}}</p>
			</div>
		</div>
	</div>
</template>

<style>

.card-wrap{
	margin: 10px;
	transform: perspective(800px);
	-webkit-transform-style:  preserve-3d;
	transform-style: preserve-3d;
	
	--c-size: v-bind('size');
	width: var(--c-size);
	height: var(--c-size);
	cursor: pointer;
}




.card-wrap:hover .card-info{
	-webkit-transform: translateY(0);
	transform: translateY(0);
}


.card-wrap:hover .card-info p{
	opacity: 1;
}


.card-wrap:hover .card-info,
.card-wrap:hover .card-info p{
	-webkit-transition: 600ms ease-out;
	transition: 600ms ease-out;
}

.card-wrap:hover .card-info:after{
	-webkit-transition: 1s ease-out;
	transition: 1s ease-out;
	opacity: 0;
	-webkit-transform: translateY(0);
	transform: translateY(0);
}

.card-wrap:hover .card-bg{
	-webkit-transition: 1s ease-out, opacity 1s ease-out;
	transition: 1s ease-out, opacity 1s ease-out;
	opacity: 1;
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

.card{
	width: inherit;
	height: inherit;
	border-radius: 25px;
	box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, 
	inset #333 0 0 0 5px, 
	inset rgba(255,255,255, 0.5) 0 0 0 6px;
	overflow: hidden;
  	-webkit-transition: 1s ease-out;
  	transition: 1s ease-out;
}
.card-bg{
	opacity: ;
	position: absolute;
	top: -20px;
	left: -20px;
	width: 100%;
	height: 100%;
	padding:  20px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	-webkit-transition: 600ms ease-out, opacity 600s;
	transition: 600ms ease-out, opacity 600ms;
	pointer-events:  none;
}

.card-info{
	padding: 20px;
	position: absolute;
	bottom: 0;
	color: #fff;
	-webkit-transform: translateY(40%);
	transform: translateY(40%);
	-webkit-transition: 600ms 1.6s ease-out;
	transition: 600ms 1.6s ease-out;
}

.card-info p{
	opacity: 0;
	text-shadow: rgba(0,0,0,1) 0 2px 2px;
	transition: 600ms 1.6s ease-out;
}

.card-info h1{
	-webkit-text-stroke: 2px #333333;
}
.card-info *{
	position: relative;
	z-index: 1;
}
.card-info:after{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	width: 100%;
	height: 100%;
	background-image: linear-gradient(to bottom, transparent 0%, rgba(#000, 0.6) 100%);
	background-blend-mode: overlay;
	opacity: 0;
	transform: translateY(100%);
	transition: 1s ease-out;
}

</style>