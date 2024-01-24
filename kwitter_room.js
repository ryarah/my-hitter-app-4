
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
 

function addUser(){

user_name = document.getElementById("user_name").Value
firebase.getData().ref("/").child(user_name).update({
purpose : "adding_user"
})
      //End code
      }});});}
getData();

function addRoom()
{
      Room_name = document.getElementById("room_name").Value
      firebase.database.ref("/").child(room_name).update;({}
   );
      
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.HTML";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").inerHTML
room_names = childKey;

console.log("room_name - " + room_name)
row = "<div class = 'room_name' "+ room_names+"onclick = 'redirectToRoomName(this.id)'>#" + room_names +"</div></hr>"

});}
getData();

function redirectToRoomName()
{
      console.log(name) ;
      localStorage.setItem("room_name"+ name);
      window.location = "kwitter_page.HTML";
}

