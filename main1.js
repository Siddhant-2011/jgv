function addUser(){
    var user_name=document.getElementById("user_name").value;
    localStorage.setItem("username",user_name);
    window.location="lets_chat_room.html";
}