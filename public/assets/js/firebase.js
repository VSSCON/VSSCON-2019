
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