function sign_in()
{
    let email  = document.getElementById('s_email').value;
    let password = document.getElementById('s_pass').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((data)=> {
        alert("Login Sucessfully");
        window.location.href = "../dashboard/dashboard.html";
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        // ...
        alert("Error " + errorMessage);
      });
}