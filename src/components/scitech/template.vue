<script>

</script>

<template>


<div class = "content-stuff">  

<div class = "scitech-navbar">
  <ul>
    <li><a href="#intro">Home</a></li>
    <li><a href="#news">Rules</a></li>
    <li><a href="#contact">Sample Questions</a></li>
    <li><a href="#hof">Hall of Fame</a></li>
  </ul>
</div> 

<div class ="intro">
    <div class = "intro-content">
        <br><br>
        <h1>Some header</h1><br>
        <p>Some stuff to look out for</p>
    </div>
    <div class = "intro-image">
        <img src = "/img/scitech/sample1.png" alt = "scitech" width = "100%">
    </div>
</div>
    
<div class = "declaration">
    <div class = "big-text" style="background-color: #ebf234; height: 50vh; margin-right: 15vw;">
            <h1>Don't miss out on <br> IISc's Premier Chemistry Event</h1>
    </div>
    <div class = "small-text" style="background-color: #ebf234; height: 50vh; width: 20vw;">
            <p>This is a unique opportunity for any chemistry enthusiast to showcase their problem-solving ability and insight in the subject. The prelims is knocking at the door and this will serve as a gateway to the main Chemenigma event!<br>

<br>The Final event will truly bring out the Enigma of Chemenigma. The finalists would have to work their way through challenging problems in India's finest research labs with the exciting opportunity to present and defend their work in front of leading Chemists in the panel of judges!

<br> Do you have what it takes to be in the Finals?</p>
    </div>    
</div>

<div class = "details">
    <div class = "img">
        <img src = "/img/scitech/sample2.png" alt = "scitech" height = "100%">
    </div>
    <div class = "text">
        <div class = "timeline" style="margin-bottom: 7vw;">
            <h1>Timeline</h1><br>
            <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
                Just click “Edit Text” or double click me to add your own content and make changes to the font. 
                I’m a great place for you to tell a story and let your users know a little more about you.
            </p><br>
        </div>
        <div class = "eligibility" style="margin-bottom: 7vw;">
            <h1>Eligibility</h1><br>
            <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
                Just click “Edit Text” or double click me to add your own content and make changes to the font. 
                I’m a great place for you to tell a story and let your users know a little more about you.
            </p><br>
        </div>
        <div class = "prizes" style="margin-bottom: 7vw;">
            <h1>Prizes</h1><br>
            <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
                Just click “Edit Text” or double click me to add your own content and make changes to the font. 
                I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
        </div>
    </div>    
</div>
<div class = "coord-intro">
    <h1>Our Coordinators</h1><br>

    <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
        Just click “Edit Text” or double click me to add your own content and make changes to the font. 
        I’m a great place for you to tell a story and let your users know a little more about you.</p><br>
</div>


<div class = "coords">
   
        
    
        <div class = "coord">
            <div class = "coord-img">
                <img src = "/img/scitech/camelia_photo_chemenigma.jpg" alt = "scitech" height = "120%" width="35%">
            </div>
            <div class = "coord-text">
                <h1>Some coord</h1>
                <p>Some stuff</p>
            </div>
        </div>
        <div class = "coord">
            <div class = "coord-img">
                <img src = "/img/scitech/priyanshu_photo_chemenigma.jpeg.jpg" alt = "scitech" height = "100%" width="45%">
            </div>
            <div class = "coord-text">
                <h1>Some coord</h1>
                <p>Some stuff</p>
            </div>
        </div>
        <div class = "coord">
            <div class = "coord-img">
                <img src = "/img/scitech/camelia_photo_chemenigma.jpg" alt = "scitech" height = "50%" width = "35%">
            </div>
            <div class = "coord-text">
                <h1>Some coord</h1>
                <p>Some stuff</p>
            </div>
    </div>
</div>

<div class ="hof" id = "hof">
    <br><br>
    <div class = "big-text" style="width:100vw">
            <h1>Hall of Fame</h1>
    </div>
    <div class = "small-text" style = "width:100vw">
            <p>Some stuff to look out for</p>
    </div>
</div>
</div>  



</template>

<style scoped>
.scitech-navbar{
    width:75vw;
}

ul {
  list-style-type: none;
  margin-top: 20px;
  padding: 0;
  overflow: hidden;
}

li {
  float: right;
}

li a {
  display: block;
  padding: 12px;
  background-color: #ffffff;
  text-decoration: none;
}
.coord-intro{
    position: relative;
    top: 40vh;
    margin: auto;
    height: 30vh;
    width: 80vw;
    background-color: #ffffff;
    color: black;
    text-align: center;
}
.content-stuff{
	position: relative;
	top: 10vh;
	height: 90vh;
	background-color: #ffffff;
	
	border-top-left-radius: 25px;
	border-top-right-radius: 30px;
	overflow-y: scroll;
}
.intro{
    display: flex;
    flex-direction: row;
    position: relative;
    top: 7vh;
    height: 90vh;
    width: 100vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}

.intro-content{
    position: relative;
    height: 90vh;
    width: 50vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}
.intro-image{
    position: relative;
    height: 90vh;
    width: 50vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}

.declaration{
    display: flex;
    flex-direction: row;
    position: relative;
    top: 10vh;
    height: 90vh;
    width: 100vw;
    background-color: #ebf234;
    align-items: center;
    text-align: center;
}

.big-text{
    position: relative;
    height: 80vh;
    width: 50vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}
.small-text{
    position: relative;
    height: 80vh;
    width: 50vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}

.details{
    display: flex;
    flex-direction: row;
    position: relative;
    top: 20vh;
    height: 90vh;
    width: 100vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}

.text{
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 50vw;
    background-color: #ffffff;
    align-items: left;
    text-align: left;
}

.coords{
    position: relative;
    top: 25vh;
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    row-gap: 10vh;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.coord{
    width: 30vw;
    background-color: #ffffff;
    align-items: right;
    text-align: center;
}

.content{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 90vh;
    width: 100vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}

.hof{
    position: relative;
    top: 25vh;
    height: 40vh;
    width: 100vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}
</style>