var firebaseConfig = {
  apiKey: "AIzaSyB7NxXBWENEliCXoLhpShhRYTE2lXwfDKg",
  authDomain: "kwitterappproject.firebaseapp.com",
  databaseURL: "https://kwitterappproject-default-rtdb.firebaseio.com",
  projectId: "kwitterappproject",
  storageBucket: "kwitterappproject.appspot.com",
  messagingSenderId: "770576258359",
  appId: "1:770576258359:web:6315991ee4d9f9bf31f6b2",
  measurementId: "G-DM7BL01QP6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  function load(){
  b = localStorage.getItem("name");
  document.getElementById("localname").innerHTML = "Welcome "+b+"!";
  }
  function gotoroom(){
    c = document.getElementById("roomname").value;
    console.log("Roomname is: ",c);
    firebase.database().ref("/").child(c).update({
          purpose: "addingRoomName"
    });
    localStorage.setItem("roomname", c);
    window.location = "kwitter_chat.html"
}