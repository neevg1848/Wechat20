const firebaseConfig = {
    apiKey: "AIzaSyARNOsh_9icpfD4tFomOw3-tetBGhy9owM",
    authDomain: "wechat-4bddb.firebaseapp.com",
    databaseURL: "https://wechat-4bddb-default-rtdb.firebaseio.com",
    projectId: "wechat-4bddb",
    storageBucket: "wechat-4bddb.appspot.com",
    messagingSenderId: "82390398149",
    appId: "1:82390398149:web:6036153740ff36fad1ecac",
    measurementId: "G-HQB067SBP2"
  };

  // Initialize Firebase
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("Username:");
roomname = localStorage.getItem("Room Name:");

function send(){
    user_msg = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        name: username,
        message: user_msg,
        like: 0

    });

    document.getElementById("msg").innerHTML="";
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        console.log(firebase_message_id);
        console.log(message_data);
        name1 = message_data["name"];
        message = message["message"];
        like = message["like"];
        name2 = "<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
        messageTag = "<h4 class='message_h4'>"+message+"</h4>";
        likeBtn = "<button class='btn btn-warning' id=>"+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
        spanTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+lik+"</span><hr>";
        document.getElementById("output")+=(name2+messageTag+likeBtn+spanTag);
//End code
      } });  }); }
getData();

function updateLike(message){
    console.log("Like Button Clicked: "+message);
    button = message;
    number_likes = document.getElementById(button).value;
    updated = Number(number_likes)+1;
    console.log(updated);
    firebase.database().ref(roomname).child(button).update({like: updated});
}

function logout(){
    localStorage.removeItem("Username:");
    localStorage.removeItem("Room Name:");
    window.location = "index.html";
}
