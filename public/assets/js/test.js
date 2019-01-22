var mainApp={};

(function(){

    var firebase = app_firebase;

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var user1 = firebase.auth().currentUser;
            var   name = user1.displayName;


          // User is signed in.
          alert(name);
        } else {
          // No user is signed in.
          window.location.replace("login1.html");

        }
      });

      function logOut(){
          alert();
          firebase.auth().signOut();
      }

      mainApp.logOut = logOut;

})();