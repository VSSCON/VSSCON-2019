var mainApp={};
var name;
var email,url;

(function(){

    var firebase = app_firebase;

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          name = user.displayName;

          email = user.email;
          url = user.photoURL;
          

        } else {
          // No user is signed in.
          window.location.replace("index.html");

        }
      });

      function logOut(){
          firebase.auth().signOut();
          window.location.replace("index.html");

      }

      mainApp.logOut = logOut;

})();
//alert(name+" "+uemail+" "+photoUrl);