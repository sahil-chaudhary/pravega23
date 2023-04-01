<script>
import Title from '../Title.vue'
import {useScriptTag} from '@vueuse/core'

useScriptTag('https://embed.typeform.com/next/embed.js')

export default {
    components: { Title },
    mounted(){
        let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://embed.typeform.com/next/embed.js')
      document.head.appendChild(recaptchaScript)

    }
}
</script>

<template>
    <div :class="`title-flex`">
        <Title text="DELHI" color="#dd6e42" />
        <div :class="`content`">   
           <!-- <p :style="`font-size:large`">Lorem ipsum dodet</p>
            <h2 style="color:black;margin: 0 10px;">Registration</h2>
            <div :class="`mainn`">
                <form action="/" class="testbox">
                    
                    <div class="item">
                        <div class="name-item">
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                    </div>
                    <div class="item">
                        <div class="name-item">
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                    </div>
                    <div class="item">
                        <div class="name-item">
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                    </div>
                    <div class="item">
                        <div class="name-item">
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                    </div>
                    <div class="item">
                        <div class="name-item">
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                    </div>
                    <div class="btn-block">
                        <button type="submit" href="/">Send</button>
                    </div>
                </form>-->
                <div data-tf-widget="rS1TgboY" data-tf-opacity="100" data-tf-iframe-props="title=Event Registration (copy)" data-tf-transitive-search-params data-tf-medium="snippet" style="width:100%;height:100%;">
            </div>
            </div>
        </div>
</template>

<style scoped>
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
