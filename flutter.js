function addUser(){
    if (document.getElementById("username").value == "") {
        document.getElementById("username").placeholder= "ERROR 546: No username detected";
    } else {
        localStorage.setItem(document.getElementById("username").value);
        window.location= "flutter_outlet.html";
    };
};