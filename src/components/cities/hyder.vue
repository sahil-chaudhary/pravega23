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
                    <label class="label" for="name">Name:</label><br>
                    <input type="text" name="name" placeholder="Enter your name" required /><br>
                    <label class="label" for="edu_level">Education Level</label><br>
                    <input type="text" name="edu_level" list="edu_name" size ="30" placeholder="Type your education level if not present" required><br>
                        <datalist id="edu_name">
                            <option value="High School (Class 11 and 12)"></option>
                            <option value="Undergraduate"></option>
                        </datalist>
                    <label class="label" for="email">Email</label><br>
                    <input type="email" name="email" placeholder="Enter your email" required /><br>
                    <label class="label" for="remarks">Remarks</label><br>
                    <textarea name="remarks" placeholder="Enter your remarks"></textarea><br>
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

.mainn{
	display: flex;
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

</style>