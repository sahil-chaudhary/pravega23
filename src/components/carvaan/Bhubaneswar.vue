<script>
import Title from '../Title.vue'
import Soon from '../Soon.vue'
export default {
    components: { Title, Soon },
    methods: {
        toggle() {
            var x = document.getElementById("selection").value;
            if (x == 'bob') {
                document.getElementById("bob").style.display = "block";
                document.getElementById("eleg").style.display = "none";
                document.getElementById("Cres").style.display = "none";
                document.getElementById("pr_and_foot").style.display = "none";
                document.getElementById("lasya").style.display = "none";
            }
            else if (x == 'eleg') {
                document.getElementById("eleg").style.display = "block";
                document.getElementById("Cres").style.display = "none";
                document.getElementById("pr_and_foot").style.display = "none";
                document.getElementById("lasya").style.display = "none";
                document.getElementById("bob").style.display = "none";
            }
            else if (x == 'Cres') {
                document.getElementById("Cres").style.display = "block";
                document.getElementById("pr_and_foot").style.display = "none";
                document.getElementById("lasya").style.display = "none";
                document.getElementById("bob").style.display = "none";
                document.getElementById("eleg").style.display = "none";
            }

            else if (x == 'pr_and_foot') {
                document.getElementById("pr_and_foot").style.display = "block";
                document.getElementById("lasya").style.display = "none";
                document.getElementById("bob").style.display = "none";
                document.getElementById("eleg").style.display = "none";
                document.getElementById("Cres").style.display = "none";
            }
            else if (x == 'lasya') {
                document.getElementById("lasya").style.display = "block";
                document.getElementById("bob").style.display = "none";
                document.getElementById("eleg").style.display = "none";
                document.getElementById("Cres").style.display = "none";
                document.getElementById("pr_and_foot").style.display = "none";

            }


        },
        togglelasya() {
            var x = document.getElementById("team-type").value;
            if (x == 'solo') {
                document.getElementById("solo_contact").style.display = "block";
                document.getElementById("team_contact").style.display = "none";
            }
            else if (x == 'group') {
                document.getElementById("team_contact").style.display = "block";
                document.getElementById("solo_contact").style.display = "none";
            }
        },
        show() {
            document.getElementById("Send_button").style.display = "block";
        },
        hide() {
            document.getElementById("Send_button").style.display = "none";
        },
        cres_ins() {
            var x = document.getElementById("category").value;
            if (x == 'Instrumental') {
                document.getElementById("instrument_stuff").style.display = "block";
            }
            else {
                document.getElementById("instrument_stuff").style.display = "none";
            }
        },
    }


}
</script>

<template>
    <div :class="`title-flex`">
        <Title text="BHUBHANESHWAR" color="#dd6e42" />
        <div :class="`content`">
            <h2 style="color:black; margin: 10px 10px; text-align: center;">Registration</h2><br>
            <p style="text-align: center;">Choose your competition, then press the "Submit" button and fill out the required
                form and press "Send".</p>
            <div :class="`mainn`">
                <form action="/" class="testbox">
                    <input type="hidden" name="city" value="bhubhaneshwar" />
                    <div class="item">

                        <label class="label" for="selection">Please select the competition:</label><br>
                        <select id="selection" @input="toggle" required>
                            <option value=""></option>
                            <option value="bob">Battle of Bands</option>
                            <option value="eleg">Elegante</option>
                            <option value="Cres">Crescendo</option>
                            <option value="pr_and_foot">Proscenium and Footprints</option>
                            <option value="lasya">Lasya</option>
                        </select>
                    </div>
                    <div id="bob">

                        <label class="label" for="name">Name:</label><br>
                        <div class="name-item">
                            <input type="text" name="name" placeholder="Enter your name" required />
                        </div>
                    </div>
                    <div id="pr_and_foot">

                        <label class="label" for="edu_level">Education Level</label><br>
                        <div class="name-item">
                            <input type="text" name="edu_level" list="edu_name"
                                placeholder="Type your education level if not present" required>
                            <datalist id="edu_name">
                                <option value="High School (Class 11 and 12)"></option>
                                <option value="Undergraduate"></option>
                            </datalist>
                        </div>
                    </div>
                    <div id="eleg">
                        <fieldset>
                            <legend>Elegante</legend>
                            <div class="item">

                                <label class="label" for="name">Name of college/Institute:</label><br>
                                <div class="name-item">
                                    <input type="text" name="name" placeholder="Enter college name" required />
                                </div>
                            </div>

                            <div class="item">

                                <label class="label" for="name">Name of the team:</label><br>
                                <div class="name-item">
                                    <input type="text" name="name" placeholder="Enter team name" required />
                                </div>
                            </div>
                            <div class="item">
                                <label class="label" for="member-details">Enter team members names along with their roles
                                    (eg. as a model, designer etc.):</label><br>
                                <textarea id="member-details" name="member-name"
                                    placeholder="Enter team members names along with their roles" required></textarea>
                            </div>
                            <div class="item">
                                <div id="member1">
                                    <label class="label" for="member1-name">Member 1:</label><br>
                                    <div class="name-item">
                                        <input type="email" name="member1-email" placeholder="Enter member 1 email"
                                            required />
                                    </div>
                                    <div class="name-item">
                                        <input type="number" name="member1-number" placeholder="Enter member 1 number"
                                            required />
                                    </div>
                                </div>
                                <div id="member2">
                                    <label class="label" for="member2-name">Member 2:</label><br>
                                    <div class="name-item">
                                        <input type="email" name="member2-email" placeholder="Enter member 2 email"
                                            required />
                                    </div>
                                    <div class="name-item">
                                        <input type="number" name="member2-number" placeholder="Enter member 2 number"
                                            required />
                                    </div>
                                </div>
                                <div id="member3">
                                    <label class="label" for="member3-name">Member 3:</label><br>
                                    <div class="name-item">
                                        <input type="email" name="member3-email" placeholder="Enter member 3 email"
                                            required />
                                    </div>
                                    <div class="name-item">
                                        <input type="number" name="member3-number" placeholder="Enter member 3 number"
                                            required />
                                    </div>
                                </div>
                            </div>

                        </fieldset>


                    </div>
                    <div id="Cres">
                        <fieldset>
                            <legend>Crescendo</legend>
                            <div class="item">
                                <label class="label" for="category">Category:</label><br>
                                <select id="category" @input="cres_ins" required>
                                    <option value="Vocals_eastern">Vocals(Eastern)</option>
                                    <option value="Vocals_western">Vocals(Western)</option>
                                    <option value="Instrumental">Instrumental</option>
                                </select>
                            </div>
                            <div class="item" id="instrument_stuff">
                                <label class="label" for="instrument">Which Instrument are you playing?</label><br>
                                <div class="name-item">
                                    <input type="text" name="name" placeholder="Enter instrument name" required />
                                </div>
                            </div>
                            <div class="item">
                                <label class="label" for="name">Name of participant:</label><br>
                                <div class="name-item">
                                    <input type="text" name="name" placeholder="Enter name" required />
                                </div>
                            </div>
                            <div class="item">
                                <label class="label" for="edu">Educational details:</label><br>
                                <div class="name-item">
                                    <input type="text" name="name" placeholder="Enter college name" required />
                                </div>
                                <div class="name-item">
                                    <input type="text" name="name" placeholder="Enter year of study" required />
                                </div>
                            </div>
                            <div class="item">
                                <label class="label" for="contact">Contact details:</label><br>
                                <div class="name-item">
                                    <input type="number" name="name" placeholder="Enter Phone No." required />
                                </div>
                                <div class="name-item">
                                    <input type="email" name="name" placeholder="Enter Email" required />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div id="lasya">
                        <fieldset>
                            <legend>Lasya</legend>
                            <div class="item">
                                <label class="label" for="team-type">Type of participation:</label><br>
                                <select id="team-type" @input="togglelasya" required>
                                    <option value="solo">Solo</option>
                                    <option value="group">Team</option>
                                </select>
                            </div>
                            <div class="item">
                                <label class="label" for="name">Name of participant/team:</label><br>
                                <div class="name-item">
                                    <input type="text" name="name" placeholder="Enter name" required />
                                </div>
                            </div>
                            <div class="item">
                                <label class="label" for="name">Name of college/dance school:</label><br>
                                <div class="name-item">
                                    <input type="text" name="name" placeholder="Enter college name" required />
                                </div>
                            </div>
                            <div class="item" id="solo_contact">
                                <label class="label" for="name">Contact details(solo):</label><br>
                                <div class="name-item">
                                    <input type="number" name="number" placeholder="Enter number" required />
                                </div>
                                <div class="name-item">
                                    <input type="number" name="number" placeholder="Enter emergency contact" required />
                                </div>

                            </div>
                            <div class="item" id="team_contact">
                                <label class="label" for="name">Contact details(team):</label><br>
                                <textarea name="Name of all members" placeholder="Enter your names"></textarea>
                                <div class="name-item">
                                    <input type="number" name="number" placeholder="Enter Contact 1" required />
                                    <input type="number" name="number" placeholder="Enter Contact 2" required />
                                    <input type="number" name="number" placeholder="Enter Contact 3" required />
                                </div>

                            </div>
                            <p> We hope that you've read through all the term and conditions for Lasya, and are willing to
                                agree to them. You cannot submit the form unless you do, so please read through the document
                                carefully!</p><br>
                            <div class="radio_buttons">
                                <label for="agree" style="display:inline;">I agree to the terms and conditions</label><br>
                                <input type="radio" id="agree" name="choice" value="agree"
                                    style="display:inline; align-items: start;" @input="show">
                                <label for="agree">I do not agree to the terms and conditions</label><br>
                                <input type="radio" id="notagree" name="choice" value="Not agree" @input="hide">
                            </div>
                        </fieldset>

                    </div>


                    <div class="btn-block" id="Send_button">
                        <button type="submit" href="/">Send</button>
                    </div>
                </form>
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
    width: 75vw;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
}

.radio_buttons {
    display: inline;
    align-items: start;
}

#bob,
#eleg,
#Cres,
#pr_and_foot,
#lasya {
    display: none;
}

#solo_contact,
#team_contact,
#instrument_stuff {
    display: none;
}


.battleofbands {
    color: black;
    font-size: x-large;
    text-align: center;
}

.text {
    font-size: large;
    text-align: left;
}

.label {
    color: black;
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

.mainn {
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
}</style>