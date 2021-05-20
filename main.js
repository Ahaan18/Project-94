function store(){
namee = document.getElementById("username").value;
localStorage.setItem("name", namee);
window.location = "room.html";
}