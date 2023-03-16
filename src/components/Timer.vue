<script>
export default{
  data(){
    return{
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      countdownDate: Number,
      timer: Object
    }
  },
  methods: {
    countdown(){
    	var now = new Date().getTime();
    	var distance = this.countdownDate - now;
    	this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    	this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    	this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
  },
  created(){
    this.countdownDate = new Date("Nov 1, 2023, 12:00:00").getTime();
    this.timer = setInterval(()=>{this.countdown()},1000)
  },
  beforeUnmount(){
    clearInterval(this.timer)
  }
}
</script>

<template>
	<div class = "date-part">
        <span class = "darker">
            {{this.days}}
        </span>
        
        <span class = "lighter">
            DAYS
        </span>
    </div>

    <div class = "date-part">
            <span class = "darker">
              {{this.hours}}
            </span>
            <span class = "lighter">
              HOURS
            </span>
          </div>
          <div class = "date-part">
            <span class = "darker">
              {{this.minutes}}
            </span>
            <span class = "lighter">
              MINUTES
            </span>
          </div>
          <div class = "date-part">
            <span class = "darker">
              {{this.seconds}}
            </span>
            <span class = "lighter">
              SECONDS
            </span>
          </div>
</template>

<style scoped>
  .date-part{
  	display: grid;
  	grid-template-columns:  repeat(2, 90px);
  	gap: 0px;
    font-size: 50px;
    color: #4cc9f0;
    font-weight: bold;
    line-height: 40px;
  }
  .lighter{
  	display: inline-block;
  	position: relative;
  	animation: appearLighter 0.8s ease-out;
  }
  .darker{
  	display: inline-block;
  	position: relative;
    opacity: 0.4;
    animation: appearDarker 2s ease-out;
  }

  @keyframes appearLighter{
  	0%{
  		opacity: 0%;
  		left: 30px;
  	}
  	100%{
  		opacity: 100%;
  		left: 0px;
  	}
  }

  @keyframes appearDarker{
  	0%{
  		opacity: 0%;
  		left: 30px;
  	}
  	50%{
  		opacity: 0%;

  	}
  	100%{
  		opacity: 0.4;
  		left: 0px;
  	}
  }
</style>