function sign_up()
{
    let email = document.getElementById('s_email').value;
    let password = document.getElementById('s_pass').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((data)=>{
        alert("Register Sucessfully " + data);
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error: " + errorMessage);
        // ...
      });
}