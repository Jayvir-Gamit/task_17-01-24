// Body LOGIN alert
alert("To check validation click on LOGIN button!!")
// LOGIN
function openloginbar() {
    document.querySelector('.sidebar').style.transition = "transform 1s, width 1s, height 1s";
    document.querySelector('.sidebar').style.transform = "scale(1)";
    document.querySelector('.sidebar').style.width = "320px";
    document.querySelector('.sidebar').style.height = "100vh";
}
function hideloginbar() {
    document.querySelector('.sidebar').style.transition = "transform 1s, width 1s, height 1s";
    document.querySelector('.sidebar').style.transform = "scale(0)";
    document.querySelector('.sidebar').style.width = "0px";
    document.querySelector('.sidebar').style.height = "0px";
    document.querySelector('.demo').innerHTML = "";
}

function emailvalidation() {
    const var1 = document.querySelector('.emailclass').value;
    let var1length = var1.length;
    const specialChars = /[A-Za-z0-9]/;

    if (var1.match(/\s/g)) {
        document.querySelector('.demo').innerHTML = "Empty Space is Not Valid.";
        document.querySelector('.demo').style.color = "red";
        return false;
    }
    else if (var1length <= 0) {
        document.querySelector('.demo').innerHTML = "Not Valid.";
        document.querySelector('.demo').style.color = "red";
        return false;
    }
    else if (!isNaN(var1[0]) || !isNaN(var1[var1length - 1])) {
        document.querySelector('.demo').innerHTML = "Numbers are not allowed at<br>the start and end in email.";
        document.querySelector('.demo').style.color = "red";
        return false;
    }
    else if (var1.slice(-10) != "@gmail.com") {
        document.querySelector('.demo').innerHTML = "Email does not contains '@gmail.com'<br>at the end.";
        document.querySelector('.demo').style.color = "red";
        return false;
    }
    else if (!(specialChars.test(var1[0])) || !(specialChars.test(var1[var1length-1]))) {
        document.querySelector('.demo').innerHTML = "Spacial Characters are not allowed at<br>the start and end in email.";
        document.querySelector('.demo').style.color = "red";
        return false;
    }
    else if (!(var1length >= 13) || !(var1length < 64)) {
        document.querySelector('.demo').innerHTML = "Email can contains length between<br>13-64.";
        document.querySelector('.demo').style.color = "red";
        return false;
    }
    else {
        document.querySelector('.demo').innerHTML = "";
        return true;
    }
}

function pwvalidation() {
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const numbers = /[0-9]/;
    const specialChars = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
    const var2 = document.querySelector('.pwclass').value;
    let pwlen = var2.length;
    if (var2.match(/\s/g)) {
        document.querySelector('.demo').innerHTML = "Empty Space is Not Valid<br>in the password.";
        document.querySelector('.demo').style.color = "red";
        return false;
    }
    else if (pwlen <= 0) {
        document.querySelector('.demo').innerHTML = "Not Valid.";
        document.querySelector('.demo').style.color = "red";
        return false;
    }
    else if (!uppercase.test(var2)) {
        document.querySelector('.demo').innerHTML = "Capital Character is not present<br>in the password.";
        document.querySelector('.demo').style.color = "red";
        return false;
    }
    else if (!lowercase.test(var2)) {
        document.querySelector('.demo').innerHTML = "Lower Characters are not present<br>in the password.";
        document.querySelector('.demo').style.color = "red";
        return false;
    }
    else if (!numbers.test(var2)) {
        document.querySelector('.demo').innerHTML = "Numbers are not present<br>in the password.";
        document.querySelector('.demo').style.color = "red";
        return false;
    }
    else if (!specialChars.test(var2)) {
        document.querySelector('.demo').innerHTML = "Special Characters are not present<br>in the password.";
        document.querySelector('.demo').style.color = "red";
        return false;
    }
    else if (!(pwlen >= 8) || !(pwlen < 32)) {
        document.querySelector('.demo').innerHTML = "Password can contains length<br>between 8-32.";
        document.querySelector('.demo').style.color = "red";
        return false;
    }
    else {
        document.querySelector('.demo').innerHTML = "";
        return true;
    }
}

function showPw() {
    const pw = document.querySelector('.pwclass');
    if (pw.type === "password") {
        pw.type = "text";
    } else {
        pw.type = "password";
    }
}

function loginsubmit() {
    if (!emailvalidation() || !pwvalidation()) {
        document.querySelector('.demo').innerHTML = "Please fill all details properly!!";
        document.querySelector('.demo').style.color = "red";
        return false;
    }
    else {
        document.querySelector('.demo').innerHTML = "You are successfully logged in.";
        document.querySelector('.demo').style.color = "green";
        alert("You are successfully logged in.");
        return true;
    }
}

// Co-Header
var drop1 = document.querySelector(".drop1").style;
var drop2 = document.querySelector(".drop2").style;
var drop3 = document.querySelector(".drop3").style;
var drop4 = document.querySelector(".drop4").style;
var drop5 = document.querySelector(".drop5").style;
function show1() {
    if (drop1.display == "block") {
        drop1.display = "none";
    }
    else {
        drop1.display = "block";
        drop2.display = "none";
        drop3.display = "none";
        drop4.display = "none";
        drop5.display = "none";
    }
}
function show2() {
    if (drop2.display == "block") {
        drop2.display = "none";
    }
    else {
        drop2.display = "block";
        drop1.display = "none";
        drop3.display = "none";
        drop4.display = "none";
        drop5.display = "none";
    }
}
function show3() {
    if (drop3.display == "block") {
        drop3.display = "none";
    }
    else {
        drop3.display = "block";
        drop1.display = "none";
        drop2.display = "none";
        drop4.display = "none";
        drop5.display = "none";
    }
}
function show4() {
    if (drop4.display == "block") {
        drop4.display = "none";
    }
    else {
        drop4.display = "block";
        drop1.display = "none";
        drop2.display = "none";
        drop3.display = "none";
        drop5.display = "none";
    }
}
function show5() {
    if (drop5.display == "block") {
        drop5.display = "none";
    }
    else {
        drop5.display = "block";
        drop1.display = "none";
        drop2.display = "none";
        drop3.display = "none";
        drop4.display = "none";
    }
}

// Slider
const images = document.querySelectorAll(".imgcont img")
let i = 0;
let j = images.length;

function nextbtn() {
    document.getElementById("image" + (i + 1)).classList.remove("active");
    i = ((j + i) + 1) % j;
    document.getElementById("image" + (i + 1)).classList.add("active");
}

function prebtn() {
    document.getElementById("image" + (i + 1)).classList.remove("active");
    i = ((j + i) - 1) % j;
    document.getElementById("image" + (i + 1)).classList.add("active");
}

// Button image Switch
function home() {
    document.getElementById('image4').classList.add('active');
    document.getElementById('image5').classList.remove('active');
    document.getElementById('image6').classList.remove('active');
}
function service() {
    document.getElementById('image4').classList.remove('active');
    document.getElementById('image5').classList.add('active');
    document.getElementById('image6').classList.remove('active');
}
function contact() {
    document.getElementById('image4').classList.remove('active');
    document.getElementById('image5').classList.remove('active');
    document.getElementById('image6').classList.add('active');
}

// Food Container
function coffee() {
    document.getElementById('box1').classList.add('active');
    document.getElementById('box2').classList.remove('active');
    document.getElementById('box3').classList.remove('active');
    document.getElementById('box4').classList.remove('active');
    document.getElementById('box5').classList.remove('active');
}
function drink() {
    document.getElementById('box1').classList.remove('active');
    document.getElementById('box2').classList.add('active');
    document.getElementById('box3').classList.remove('active');
    document.getElementById('box4').classList.remove('active');
    document.getElementById('box5').classList.remove('active');
}
function fastfood() {
    document.getElementById('box1').classList.remove('active');
    document.getElementById('box2').classList.remove('active');
    document.getElementById('box3').classList.add('active');
    document.getElementById('box4').classList.remove('active');
    document.getElementById('box5').classList.remove('active');
}
function tea() {
    document.getElementById('box1').classList.remove('active');
    document.getElementById('box2').classList.remove('active');
    document.getElementById('box3').classList.remove('active');
    document.getElementById('box4').classList.add('active');
    document.getElementById('box5').classList.remove('active');
}
function allItems() {
    console.log("clicked")
    document.getElementById('box1').classList.remove('active');
    document.getElementById('box2').classList.remove('active');
    document.getElementById('box3').classList.remove('active');
    document.getElementById('box4').classList.remove('active');
    document.getElementById('box5').classList.add('active');
}