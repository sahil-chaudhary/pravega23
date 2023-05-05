import axios from 'axios'
import Swal from 'sweetalert2'
const DOMAIN = "https://api.pravega.org"

async function sendEmail(data) {
    try {
        const { status } = await axios.post(`${DOMAIN}/api/user/post/ca/email`, JSON.stringify(data));
        status == 200 ? Swal.fire({
            title: 'NOTIFICATION',
            icon: 'info',
            html:
                'Email is sent to' + doc.getElementById("value_email").value +
                ' by ca.pravega.iisc@gmail.com successfully',
            showCloseButton: true,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',

        }) : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Something went wrong while sending mail!`,
        })
    }
    catch (error) {
        var cont = error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Something went wrong! ${cont}`,
        })
    }
}
export const sendemail = async (e) => {
    e.preventDefault();
    alert('hello');
    let doc = document,
        name = doc.getElementById("value_name").value,
        email = doc.getElementById("value_email").value,
        number = doc.getElementById("value_number").value,
        college = doc.getElementById("value_college").value,
        age = doc.getElementById("value_age").value,
        gender = doc.getElementById("value_gender").value,
        city = doc.getElementById("value_city").value,
        state = doc.getElementById("value_state").value;
    var napattern = /^(((?<!^)\s(?!$)|[-a-zA-Z])*)$/, nupattern = /^[0-9]+$/;
    if (name.length < 4 || name.length > 18 || !name.match(napattern)) { alert("Name should contain 4 to 18 alphabets with spaces"); }
    else if (!number.match(nupattern)) { alert("Contact number shd contain only digits, no decimals"); }
    else if (number.length != 10) { alert("Contact number should contain 10 digits"); }
    else if (!age.match(nupattern)) { alert("Age should have no decimal values") }
    else if (age < 4 || age > 100) { alert("Age should be between 4 and 100") }
    else {
        const date = new Date();
        const data = { name: name, email: email, number: number, college: college, age: age, gender: gender, city: city, state: state, timestamp: date.toISOString() }
        document.getElementById("main_f").style.display = "none";
        document.getElementById("verif").style.display = 'block';
        localStorage.setItem("user", JSON.stringify(data));
        sendEmail(data);
    }
}

export const checkotp = async (event) => {
    event.preventDefault();
    let otp = Number(document.getElementById('value_otp').value);
    document.getElementById('value_otp').value = "";
    try {
        const { status } = await axios.post(`${DOMAIN}/api/user/post/ca/signup/${otp}`, JSON.stringify(JSON.parse(localStorage.getItem('user'))));
        if (status == 200) {
            alert("We will contact you soon");
            localStorage.removeItem('user');
            window.location.href = "/";
        }
        else { Swal.fire("Wrong OTP") }
    }
    catch (error) {
        var cont = error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Something went wrong! ${cont}`,
        })
    }
}