<script>
import Title from '../Title.vue'
import Soon from '../Soon.vue'
export default{
	components:{Title, Soon}
}
</script>

<template>
<div :class = "`title-flex`">
		<Title text = "DELHI" color = "#dd6e42"/>
		<div :class = "`content`">
			<p :class="`battleofbands`">
                <u>Battle Of Bands</u>
            </p>
			<p :style="`font-size:large`">Lorem ipsum dodet</p>
            <h2 style="color:black; margin: 0 10px; text-align: center;">Registration</h2>
            <div :class="`mainn`">
				<form action="/" class="testbox">
                    <div class = "item">
                        
                            <label class="label" for="name">Name:</label><br>
						<div class = "name-item">
                            <input type="text" name="name" placeholder="Enter your name" required />
                        </div>
                    </div>
                    <div class = "item">
                        
                            <label class="label" for="edu_level">Education Level</label><br>
						<div class = "name-item">
                            <input type="text" name="edu_level" list="edu_name" placeholder="Type your education level if not present" required>
                                <datalist id="edu_name">
                                    <option value="High School (Class 11 and 12)"></option>
                                     <option value="Undergraduate"></option>
                                 </datalist>
                        </div>
                    </div>             
                    <div class = "item">
                       
                            <label class="label" for="email">Email</label><br>
						<div class = "name-item">	
                            <input type="email" name="email" placeholder="Enter your email" required />
                        </div>
                    </div>    
                    <div class = "item">
                        
                            <label class="label" for="remarks">Remarks</label><br>
						<div class = "name-item">
                            <textarea name="remarks" placeholder="Enter your remarks"></textarea>
                        </div>
                    </div>    
                   
                    <div class="btn-block">
                        <button type="submit" href="/">Send</button>
                    </div>
                </form>
            </div>
		</div>
	</div>
</template>

<style scoped>
.title-flex{
	display: flex;
	height: 90vh;
}
.content{
	background-color: #eeeeee;
	width: 75vw;
	justify-content: center;
	align-items: center;
}

.battleofbands{
   color:black;
   font-size:x-large;
   text-align: center;
}

.text{
	font-size: large;
	text-align: left;
}

.label{
	color:black;
	font-size: large;
	text-align: left;
	margin: 0 10px;
}

.title-flex {
    display: flex;
    height: 90vh;
}

.content {
    background-color: #eeeeee;

}

.battleofbands {
    color: black;
    font-size: x-large;
    text-align: center;
}

.text {
    font-size: large;
    text-align: left;
    text-decoration: underline;
}

form {
    width: 100%;
    border-radius: 6px;
    line-height: 22px;
}
.mainn{
    border-radius: 8px;
    width: 100%;
    margin: 0 auto;
    height: fit-content;
    align-self: center;
    color: black;
}
.testbox {
    padding: 20px;
    width: 100%;
    margin: 0 auto;
}

input {
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    height: 35px;
    width: 100%;
}


.item:hover p,
.item:hover i,
.question:hover p,
.question label:hover,
input:hover::placeholder,
a {
    color: #095484;
}

.item input:hover,
.item select:hover {
    border: 1px solid transparent;
    box-shadow: 0 0 6px 0 #095484;
    color: #095484;
}

.item {
    position: relative;
    margin: 10px 0;
}

.item i {
    right: 2%;
    top: 30px;
    z-index: 1;
}

input[type=checkbox] {
    display: none;
}

span.required {
    margin-left: 0;
    color: red;
}

label.check:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 1px solid #095484;
}

input[type=checkbox]:checked+.check:before {
    background: #095484;
}

label.check:after {
    content: "";
    position: absolute;
    top: 6px;
    left: 4px;
    width: 8px;
    height: 4px;
    border: 3px solid #fff;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    opacity: 0;
}

input[type=checkbox]:checked+label:after {
    opacity: 1;
}

.btn-block {
    margin-top: 10px;
    text-align: center;
}

button {
    width: 150px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: #095484;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
}

button:hover {
    background: #0666a3;
}

@media (min-width: 568px) {

    .name-item,
    .city-item {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
		margin-left: 10px;
    }

    .name-item input,
    .city-item input {
        width: calc(50% - 20px);
    }

    .city-item select {
        width: calc(50% - 8px);
    }
}

</style>