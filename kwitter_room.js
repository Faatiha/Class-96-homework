var firebaseConfig = {
      apiKey: "AIzaSyBrSOQU-6V7JQs1zoKE0cOERyKw0l5tPcw",
      authDomain: "kwitter-de760.firebaseapp.com",
      databaseURL: "https://kwitter-de760-default-rtdb.firebaseio.com",
      projectId: "kwitter-de760",
      storageBucket: "kwitter-de760.appspot.com",
      messagingSenderId: "179093654538",
      appId: "1:179093654538:web:3a8a7b1244dffe1b4de3f3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="index.html";
 }
 