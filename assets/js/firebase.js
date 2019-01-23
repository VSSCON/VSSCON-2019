
var app_firebase={};
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDN6VJFmBj-dyAkM7QFtx0uWsdMmO9i3MM",
    authDomain: "vsscon-2k19.firebaseapp.com",
    databaseURL: "https://vsscon-2k19.firebaseio.com",
    projectId: "vsscon-2k19",
    storageBucket: "vsscon-2k19.appspot.com",
    messagingSenderId: "542178147445"
  };

  firebase.initializeApp(config);

  app_firebase = firebase;
})();


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      document.getElementById("name").style.display='block';
      //document.getElementById("hlogin").style.display = 'none';
    // //emailVerified = user.emailVerified;
    // uid = user.uid;
    document.getElementById("name").innerHTML = name;
    // document.getElementById("name1").innerHTML = name;
    // document.getElementById("Email").innerHTML = email;
    // document.getElementById("profileImg").src = url;
    // document.getElementById("payment").innerHTML = "Payment : Not Completed";




   

  } else {
    // No user is signed in.
    //window.location.replace("index.html");

  }
});

function logOut(){
  firebase.auth().signOut();
  window.location.replace("index.html");

}