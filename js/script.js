//welcomeMessage();




function welcomeMessage() {
    let username = prompt("Please enter your name:");
    if (username) {
        document.getElementById('welcome-user').innerText = username;
}
}

function validateForm(){
    let name = document.getElementById('name').value;
    let umur = document.getElementById('umur').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === "" || umur === "" || email === "" || message === ""){
        alert("All fields must be filled out!");
        return false;
    } else {
        alert("Form submitted successfully! Thank You, " + name + "!");
        let now = new Date();
        let timeString = now.toLocaleString();

        let hasil = `Name: ${name}Age: ${umur} Email: ${email}  Message: ${message} Time: ${timeString}`;

        document.getElementById('disabledField').value = hasil;
        

        document.getElementById('name').value="";
        document.getElementById('umur').value="";
        document.getElementById('email').value="";
        document.getElementById('message').value="";
    }
}