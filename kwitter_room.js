const firebaseConfig = {
      apiKey: "AIzaSyCvwPeXMWtf_laMh_J651hwR5CpRB0QMoo",
      authDomain: "kwitter-project-ad922.firebaseapp.com",
      databaseURL: "https://kwitter-project-ad922-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-ad922",
      storageBucket: "kwitter-project-ad922.appspot.com",
      messagingSenderId: "1099376039888",
      appId: "1:1099376039888:web:ab6475a4829a34c2378bd5",
      measurementId: "G-V0PB27NXH0"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
}


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}