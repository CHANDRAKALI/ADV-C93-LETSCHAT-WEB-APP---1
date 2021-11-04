const firebaseConfig = {
      apiKey: "AIzaSyBXzNvm4pF2FVhE8z9RtP9EDP_XtLbR7rY",
      authDomain: "projectletschat-web-app---1.firebaseapp.com",
      databaseURL: "https://projectletschat-web-app---1-default-rtdb.firebaseio.com",
      projectId: "projectletschat-web-app---1",
      storageBucket: "projectletschat-web-app---1.appspot.com",
      messagingSenderId: "8711150194",
      appId: "1:8711150194:web:c36dda2540dfb3cb6f00eb"
    };
       user_name = localStorage.getItem("username");
       document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

       function add_room() {
            room_name = document.getElementById("room_name").value ;
            localStorage.setItem("room_name" , room_name);
            window.location = "kwitter_page.html";
       }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
