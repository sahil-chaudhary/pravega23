<script>
	export default {
    data(){
    	return{
        choice: 0,
        navOpen: false
      }
    },
    methods:{
      closeDropdown(){
        this.navOpen = false;

        console.log("navOpen value: " + this.navOpen)
      }
    },
    emits: ['navUpdate'],
    watch: {
			choice(newChoice){
        this.$emit('navUpdate',newChoice)
      },
      navOpen(newNavOpen){
        console.log("works")
        if(newNavOpen){
          console.log(true)
          this.$refs.dropdown.style.maxHeight  = "100vh"
        }
        else{
          this.$refs.dropdown.style.maxHeight = "0vh"
        }
        
      }
    },

  }
</script>

<template>
  <nav :id="`navbar`">
    <div :class="`left-pravega`" @click="updateNav(0)">
      <router-link :style = "`text-decoration: none; color: inherit`" to="/">
      	<img src = "/img/logo/pravegax.png" />
      </router-link>
    </div>

    <div :class="`right-nav`">

      <router-link :style = "`text-decoration: none; color: inherit; `" to="/carvaan">
      <div :class="`workshop-button`">
          Carvaan
      </div>
      </router-link>

      <router-link :style = "`text-decoration: none; color: inherit; `" to="/scitech">
    	<div  :class="`scitech-button`">
      		SciTech
    	</div>
    	</router-link>


      <router-link :style = "`text-decoration: none; color: inherit`" to="/cultural">
      <div  :class="`cult-button`">
      		Culturals
    	</div>
      </router-link>

      <router-link :style = "`text-decoration: none; color: inherit`" to="/workshop">
    	<div :class="`workshop-button`">
      		Workshop
    	</div>
      </router-link>

      <router-link :style = "`text-decoration: none; color: inherit`" to="/merch">
    	<div :class="`merch-button`">
      		Merchandise
    	</div>
      </router-link>

      <router-link :style = "`text-decoration: none; color: inherit`" to="/sponsors">
    	<div  :class="`spon-button`">
      		
      		Sponsors
    	</div>
      </router-link>

      <router-link :style = "`text-decoration: none; color: inherit`" to="/contact">
    	<div  :class="`cont-button`">
      		Contact
    	</div>
      </router-link> 
    </div>

  </nav>

  <nav :id="`mobile-nav`">
    <div :class="`left-pravega`" @click="updateNav(0)">
      <router-link :style = "`text-decoration: none; color: inherit`" to="/">
        <img src = "/img/logo/x.png"/>
      </router-link>
    </div>

    <button class = "burger" @click="navOpen=!navOpen" :class = "{active:navOpen}">
      <span class = "top"></span>
      <span class = "mid"></span>
      <span class = "bottom"></span>
    </button>

    <div class="dropdown" ref = "dropdown">
      <router-link @click = "this.navOpen = false" :style = "`text-decoration: none; color: inherit`" to="/carvaan">
        <div>
          Carvaan
        </div>
      </router-link>

      <router-link @click = "this.navOpen = false" :style = "`text-decoration: none; color: inherit`" to="/scitech">
        <div>
          SciTech
        </div>
      </router-link>

      <router-link @click = "this.navOpen = false" :style = "`text-decoration: none; color: inherit`" to="/cultural">
        <div>
          Culturals
        </div>
      </router-link>

      <router-link @click = "this.navOpen = false" :style = "`text-decoration: none; color: inherit`" to="/workshop">
        <div>
          Workshop
        </div>
      </router-link>

      <router-link @click = "this.navOpen = false" :style = "`text-decoration: none; color: inherit`" to="/merch">
        <div> 
          Merchandise
        </div>
      </router-link>

      <router-link @click = "this.navOpen = false" :style = "`text-decoration: none; color: inherit`" to="/sponsors">
        <div>
          Sponsors
        </div>
      </router-link>

      <router-link @click = "this.navOpen = false" :style = "`text-decoration: none; color: inherit`" to="/contact">
        <div>
          Contact
        </div>
      </router-link>
    </div>
  
  </nav>
</template>

<style scoped>
  	
  #navbar{
    position: sticky;
    top: 0px;
    height: 10vh;
    width: 100vw;
    box-sizing: border-box;
    gap: 10vw;
    display:flex;
    align-items: center;
    background-color: #3a0ca3;
    color: #eeeeee;
    padding-left: 5vw;
    z-index: 2;

  }
  .left-pravega{
  	cursor: pointer;
  }
  .left-pravega img{
    width: 10vw
  }
  .right-nav{
  	font-size: 1.5em;
    display:flex;
    gap: 1vw
  }
  .right-nav div{
    padding: 8px;
    cursor:pointer;
    transition: color 600ms, background-color 600ms, background-position 500ms;

    background-size: 200% 200%;
    background-position: 50% 0%;
    border-radius: 18px;
  }
  .right-nav div:hover{
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);;
    background-position: 50% 60%;
  }

  .scitech-button{
    background-image: linear-gradient(to bottom,rgba(0,0,0,0) 50%, #f72585 100%);
  }
  .scitech-button:hover{
    color: #f72585;
  }

  .cult-button{
    background-image: linear-gradient(to bottom,rgba(0,0,0,0) 50%, #fff12d 100%);
  }
  .cult-button:hover{
    color: #fff12d;
  }
  .workshop-button{
    background-image: linear-gradient(to bottom,rgba(0,0,0,0) 50%, #3fd8a4 100%);
  }
  .workshop-button:hover{
    color: #3fd8a4;
  }  
  .merch-button{
    background-image: linear-gradient(to bottom,rgba(0,0,0,0) 50%, #7bff28 100%);
  }
  .merch-button:hover{
    color: #7bff28;
  }  
  .spon-button{
    background-image: linear-gradient(to bottom,rgba(0,0,0,0) 50%, #dd6e42 100%);
  }
  .spon-button:hover{
    color: #dd6e42;
  }  
  .cont-button{
    background-image: linear-gradient(to bottom,rgba(0,0,0,0) 50%, #3fd8a4 100%);
  }
  .cont-button:hover{
    color: #3fd8a4;
  }  
  #mobile-nav{
    display: none;
    position: absolute;
  }


    .burger{
      width: 50px;
      position: absolute;
      height: 50px;
      background-color: transparent;
      right: 10px;
      border-radius: 8px;
    }
   .burger span {
      display: block;
      width: 20px;
      height: 2px;
      margin: auto;
      background: white;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: all 0.4s ease;
    }
    .top {
      transform: translateY(-8px);
    }
    .bottom {
     transform: translateY(8px);
    }
    .burger.active .top {
     transform: rotate(-45deg);
    }
    .burger.active .mid {
     transform: translateX(-20px) rotate(360deg);
     opacity: 0;
    }
    .burger.active .bottom {
     transform: rotate(45deg);
    }

  .dropdown{
    position: absolute;
    max-height: 0vh;
    overflow: hidden;
    transition: max-height 0.6s ease;
    width: 100vw;
    background-color: #3a0ca3;
    top: 10vh;
    left: 0vw;

    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    background-image: linear-gradient(to bottom, #3a0ca3, #21075c);
  }

  .dropdown div{
    display: block;
    position: relative;
    width: max-content;
    left: 50vw;
    transform: translateX(-50%);
    font-size: 50px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px){
    #navbar{
      display: none;
    }
    #mobile-nav{
      position: sticky;
      top: 0px;
      height: 10vh;
      width: 100vw;
      box-sizing: border-box;
      gap: 20vw;
      display:flex;
      align-items: center;
      background-color: #3a0ca3;
      color: #eeeeee;
      padding-left: 5vw;
      z-index: 2;
    }
    .burger{
      font-size: 50px;
    }
  }
</style>
