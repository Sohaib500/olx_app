function signout()
{
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location.href = "../Sign in/sign_in.html";
      }).catch(function(error) {
        // An error happened.
      });
}