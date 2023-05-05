const DOMAIN = "https://api.pravega.org"

function sendEmail(data) {
    fetch(`${DOMAIN}/api/user/post/ca/email`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        }
    }).then((res) => {
        if (res.status == 200) { alert("OTP sent by ca.pravega.iisc@gmail.com"); }
        else if (res.status == 405 || res.status == 401) { alert("Error sending OTP. Please enter the last 4 digits of your contact number + your age in 2 digits as the OTP. "); }
    }).catch((e) => alert(e.message));
}
const sendemail = async (e) => {
    e.preventDefault();
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
const checkotp = (event) => {
    event.preventDefault();
    let otp = Number(document.getElementById('value_otp').value);
    document.getElementById('value_otp').value = "";
    fetch(`${DOMAIN}/api/user/post/ca/signup/${otp}`, {
        method: "POST",
        body: JSON.stringify(JSON.parse(localStorage.getItem('user'))),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        }
    }).then((response) => {
        if (response.status == 403) alert("Wrong OTP!");
        else if (response.status == 200) {
            alert("We will contact you soon");
            localStorage.removeItem('user');
            window.location.href = "/";
        };
    }).catch((e) => alert(e))
}