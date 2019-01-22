var mainApp={};
var usid;
(function(){

    var firebase = app_firebase;

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var user1 = firebase.auth().currentUser;
            var   name = user1.displayName;

          usid = firebase.auth().currentUser.displayName;
          // alert(usid);
          // User is signed in.
          //alert(name);
        } else {
          // No user is signed in.
          window.location.replace("index.html");

        }
      });

      function logOut(){
          alert();
          firebase.auth().signOut();
      }

      mainApp.logOut = logOut;

})();