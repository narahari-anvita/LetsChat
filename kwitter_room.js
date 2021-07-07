var firebaseConfig = {
  apiKey: "AIzaSyAB_VPYB9oLJUI_3t8siFRaejY6pLRYOmE",
  authDomain: "letschat-c12dd.firebaseapp.com",
  databaseURL: "https://letschat-c12dd-default-rtdb.firebaseio.com",
  projectId: "letschat-c12dd",
  storageBucket: "letschat-c12dd.appspot.com",
  messagingSenderId: "776933976424",
  appId: "1:776933976424:web:2ee1cd660110d3b39d0edd"
};
//Intialize 
firebase.initializeApp(firebaseConfig);


function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
  document.getElementById("output").innerHTML = "";
  snapshot.forEach(function (childSnapshot) {

      childKey = childSnapshot.key;

      Room_names = childKey;


      console.log("Room Name - " + room_name);

      row = "<div class='room_name' id=" + room_name + " onclick='redirectToRoomName(this.id)'>#" + room_name + "</div><hr>";

      document.getElementById("output").innerHTML += row;

    });
  });
}


  user_name1 = localStorage.getItem("user_name");
    
  document.getElementById("user_name").value = "Welcome " + user_name1 + "!";



function addRoom() {
  room_name = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
  purpose: "adding room name"

  });
  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";

}


function redirectToRoomName(name) 

{

  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";

}
