<script>
	export default {
    data(){
    	return{
        choice: 0
      }
    },
    methods:{
      updateNav(choice){
        this.choice = choice
      }
    },
    emits: ['navUpdate'],
    watch: {
			choice(newChoice){
        this.$emit('navUpdate',newChoice)
      }
    }
  }
</script>

<template>
  <nav :id="`navbar`">
    <div :class="`left-pravega`" @click="updateNav(0)">
      <router-link :style = "`text-decoration: none; color: inherit`" to="/">
      	Pravega
      </router-link>
    </div>
    <div :class="`right-nav`">
    	<div @click="updateNav(1)">
      		<router-link :style = "`text-decoration: none; color: inherit`" to="/scitech">
      		SciTech
      		</router-link>
    	</div>
    	<div  @click="updateNav(2)">
    		<router-link :style = "`text-decoration: none; color: inherit`" to="/cultural">
      		Culturals
      		</router-link>
    	</div>
    	<div  @click="updateNav(3)">
      		<router-link :style = "`text-decoration: none; color: inherit`" to="/workshop">
      		Workshop
      		</router-link>
    	</div>
    	<div  @click="updateNav(4)">
      		<router-link :style = "`text-decoration: none; color: inherit`" to="/merch">
      		Merchandise
      		</router-link>
    	</div>
    	<div  @click="updateNav(5)">
      		<router-link :style = "`text-decoration: none; color: inherit`" to="/sponsors">
      		Sponsors
      		</router-link>
    	</div>
    	<div  @click="updateNav(6)">
    		<router-link :style = "`text-decoration: none; color: inherit`" to="/contact">
      		Contact
      		</router-link>
    	</div>
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
    gap: 20vw;
    display:flex;
    align-items: center;
    background-color: #3a0ca3;
    color: #c89933;
    padding-left: 5vw;
    z-index: 2;
  }
  .left-pravega{
  	cursor: pointer;
  }
  .right-nav{
  	font-size: 1.5em;
    display:flex;
    gap: 40px;
    justify-content: space-evenly;
    align-items: center;
  }
  .right-nav div{
    padding: 8px;
    cursor:pointer;
    transition: color 600ms, background-color 600ms;
    border-radius: 10px;
  }
  .right-nav div:hover{
    color: #3a0ca3;
    background: #c89933;
  }


</style>
