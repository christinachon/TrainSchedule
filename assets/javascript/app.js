$(document).ready(function () {
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

$("#current-time").text(moment().format(" hh :  mm a , MMMM D YYYY"));

$("#add-train").click(function(){
  event.preventDefault();

  let name = $("#train-name").val().trim();
  let destination = $("#destination").val().trim();
  let firstTrain = $("#first-train").val().trim();
  let frequency = $("#frequency").val().trim();

  database.ref().push().set({
    name: name,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency,
  });

  $(".form-control").val("");
}) 

database.ref().on("child_added", function(snapshot){
  let newTrain = snapshot.val();
  let firstTrainNew = moment(snapshot.val().firstTrain, "hh:mm").subtract(1, "years");
  let diffTime = moment().diff(moment(firstTrainNew), "minutes");
  let remainder = diffTime % snapshot.val().frequency;
  var minAway = snapshot.val().frequency - remainder;
  var nextTrain = moment().add(minAway, "minutes");
  nextTrain = moment(nextTrain).format("hh:mm");
  let newRow = $("<tr>");
  let newName = $("<td>");
  newName.append(newTrain.name);
    let newDestination = $("<td>");
  newDestination.append(newTrain.destination);
    let newFirstTrain = $("<td>");
  newFirstTrain.append(nextTrain);
    let newFrequency = $("<td>");
  newFrequency.append(newTrain.frequency);
    let newMinute = $("<td>");
  newMinute.append(minAway);

  newRow.append(newName, newDestination, newFrequency, newFirstTrain, newMinute);
  $("#add-train-row").append(newRow);
})
})

