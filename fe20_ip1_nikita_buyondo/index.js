
function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var writeMe = document.getElementById("writeMe").value;
    var message = document.getElementById("message");
    var text;

    message.style.padding = "20px" ;

    if(name.length <3) {
        text = "Please enter your name";
        message.innerHTML = text;
        return false;
    }
    if(email.length <3) {
        text = "Please enter your email";
        message.innerHTML = text;
        return false;
    }
    if(writeMe.length <30) {
        text = "Message has to be more than 30 characters";
        message.innerHTML = text;
        return false;
    }
    alert("Message Sent Successfully!")
    return true;
}