$(document).ready(function(){
  var firebaseConfig = {
    apiKey: "AIzaSyAigYuNDsmseMJv5ZUo1k0hPqmHoSPQCrY",
    authDomain: "train-schedule-49fb3.firebaseapp.com",
    databaseURL: "https://train-schedule-49fb3.firebaseio.com",
    projectId: "train-schedule-49fb3",
    storageBucket: "",
    messagingSenderId: "389224161482",
    appId: "1:389224161482:web:b16b5e887979fa14"
  };

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  var name;
  var destination;
  var firstTrain;
  var frequency = 0;


})