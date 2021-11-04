const firebaseConfig = {
    apiKey: "AIzaSyBRqylIPYIfExvsHgdij1ZfyVdZpbzZ-_M",
    authDomain: "prpject-93-kwitter.firebaseapp.com",
    databaseURL: "https://prpject-93-kwitter-default-rtdb.firebaseio.com",
    projectId: "prpject-93-kwitter",
    storageBucket: "prpject-93-kwitter.appspot.com",
    messagingSenderId: "508887192467",
    appId: "1:508887192467:web:0a569b9244b4a7d8130e66"
  };

  function addUser() {
      user_name = document.getElementById("user_name").value ;
      localStorage.setItem("user_name" , user_name);
      window.location = "kwitter_room.html";
  }