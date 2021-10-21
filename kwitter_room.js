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
    //ADD YOUR FIREBASE LINKS HERE
    
    username = localStorage.getItem("Username:");
    document.getElementById("username").innerHTML = username;
    
    
    function addRoom(){
          roomName = document.getElementById("room_name").value;
          localStorage.setItem("Room Name:", roomName);
          firebase.database().ref("/").child(roomName).update({purpose: "adding room name"});
          window.location = "page.html";
    }
    
    function getData() {
          firebase.database().ref("/").on('value', function(snapshot) {
                document.getElementById("output").innerHTML = "";
                snapshot.forEach(function(childSnapshot) {
                      childKey  = childSnapshot.key;
                      Room_names = childKey;
          //Start code
                      console.log("Room Name: "+Room_names);
                   row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+Room_names+"</div><hr>";
                   document.getElementById("output").innerHTML += row;
    
          //End code
    });});}
    
    getData();
    
    function redirect(name){
          console.log("Redirecting to "+name);
          localStorage.setItem("Room Name:", name);
          window.location = "page.html";
    }
    
    function logout(){
          localStorage.removeItem("Username:");
          localStorage.removeItem("Room Name:");
          window.location = "index.html";
    }


