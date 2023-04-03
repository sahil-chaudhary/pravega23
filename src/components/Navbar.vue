<script>
	export default {
    data(){
    	return{
        navOpen: false
      }
    },
    methods:{
      closeDropdown(){
        this.navOpen = false;

        console.log("navOpen value: " + this.navOpen)
      },
      changecolor(){
        if(window.scrollY > 0){
          document.getElementById("navbar").style.backgroundColor = "white";
        }
        else{
          document.getElementById("navbar").style.backgroundColor = "transparent";
        }

      }
    },
    watch: {
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
  <nav :id="`navbar`" @load = "changecolor">
    <div :class="`left-pravega`">
      <router-link :style = "`text-decoration: none; color: inherit`" to="/">
      	<img src = "/img/logo/x.png" />
      </router-link>
    </div>

    <div :class="`right-nav`">

      <router-link :style = "`text-decoration: none; color: inherit;`" to="/carvaan">
      <div :class="`workshop-button`">
          CARVAAN
      </div>
      </router-link>

      <router-link :style = "`text-decoration: none; color: inherit; `" to="/scitech">
    	<div  :class="`scitech-button`">
      		SCITECH
    	</div>
    	</router-link>


      <router-link :style = "`text-decoration: none; color: inherit`" to="/cultural">
      <div  :class="`cult-button`">
      		CULTURALS
    	</div>
      </router-link>

      <router-link :style = "`text-decoration: none; color: inherit`" to="/workshop">
    	<div :class="`workshop-button`">
      		WORKSHOP
    	</div>
      </router-link>

      <router-link :style = "`text-decoration: none; color: inherit`" to="/merch">
    	<div :class="`merch-button`">
      		MERCHANDISE
    	</div>
      </router-link>

      <router-link :style = "`text-decoration: none; color: inherit`" to="/sponsors">
    	<div  :class="`spon-button`">
      		
      		SPONSORS
    	</div>
      </router-link>

      <router-link :style = "`text-decoration: none; color: inherit`" to="/contact">
    	<div  :class="`cont-button`">
      		CONTACT
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
      <router-link @click = "this.navOpen = false" :style = "`text-decoration: none; color: inherit;`" to="/carvaan">
        <div>
          CARVAAN
        </div>
      </router-link>

      <router-link @click = "this.navOpen = false" :style = "`text-decoration: none; color: inherit`" to="/scitech">
        <div>
          SCITECH
        </div>
      </router-link>

      <router-link @click = "this.navOpen = false" :style = "`text-decoration: none; color: inherit`" to="/cultural">
        <div>
          CULTURALS
        </div>
      </router-link>

      <router-link @click = "this.navOpen = false" :style = "`text-decoration: none; color: inherit`" to="/workshop">
        <div>
          WORKSHOP
        </div>
      </router-link>

      <router-link @click = "this.navOpen = false" :style = "`text-decoration: none; color: inherit`" to="/merch">
        <div> 
          MERCHANDISE
        </div>
      </router-link>

      <router-link @click = "this.navOpen = false" :style = "`text-decoration: none; color: inherit`" to="/sponsors">
        <div>
          SPONSORS
        </div>
      </router-link>

      <router-link @click = "this.navOpen = false" :style = "`text-decoration: none; color: inherit`" to="/contact">
        <div>
          CONTACT
        </div>
      </router-link>
    </div>
  
  </nav>
</template>

<style scoped>
  	
  #navbar{
    
    position: fixed;
    top: 0px;
    height: 10vh;
    width: 100vw;
    box-sizing: border-box;
    gap: 10vw;
    display:flex;
    align-items: center;
    background-color: rgba(0,0,0,0);
    color: #eeeeee;
    padding-left: 5vw;
    z-index: 20;

  }
  .left-pravega{
  	cursor: pointer;
  }
  .left-pravega img{
    width: 40px;
  }
  .right-nav{
  	font-size: 1.2em;
    display:flex;
    gap: 1vw;
    justify-content: space-evenly;
    align-items: center;
    
  }
  .right-nav div{
    padding: 1vw;
    cursor:pointer;
    transition: color 600ms, background-color 600ms, background-position 500ms;
    letter-spacing: 1px;
    background-size: 200% 200%;
    background-position: 50% 0%;
    border-radius: 18px;
    z-index: 20;
  }
  .right-nav div:hover{
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);;
    background-position: 50% 60%;
    z-index: 20;
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
      font-size: small;
      width: 50px;
      position: absolute;
      height: 50px;
      background-color: transparent;
      right: 10px;
      border-radius: 8px;
      margin-right: 5vw;
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
    font-size: small;
    position: absolute;
    max-height: 0vh;
    overflow: hidden;
    transition: max-height 0.6s ease;
    width: 100vw;
    background-color: #3a0ca3;
    top: 10vh;
    left: 0vw;
    letter-spacing: 2px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    background-color: #000000;
  }

  .dropdown div{
    display: block;
    position: relative;
    width: max-content;
    left: 50vw;
    transform: translateX(-50%);
    font-size: 25px;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px){
    .left-pravega img{
      padding-top: 10px;
      width: 40px;
    }
    #navbar{
      display: none;
    }
    #mobile-nav{
      position: fixed;
      top: 0px;
      margin-top: 0px;
      height: 10vh;
      width: 100vw;
      box-sizing: border-box;
      gap: 20vw;
      display:flex;
      background-color: #000000;
      color: #eeeeee;
      padding-left: 5vw;
      padding-right: 5vw;
      z-index: 20;
    }
    .dropdown{
      font-size: 25px;
    }
    .dropdown div{
      position: relative;
      right: 0;
    }
  }
</style>
