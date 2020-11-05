var names = ["1","Dr_Evel","Yang_Evel","admin"];
var keys = ["1","123123","456456", "qwerty"];
debugger;
function Check() {
    var entrance = document.getElementsByTagName("img");
    var login = document.getElementById("log").value;
    var password = document.getElementById("password").value;
    for (var i = 0; i <= names.length; i++) 
    if (names [i] == login && keys [i] == password) {
        
        entrance[0].setAttribute("src", 'logOn.jpg'); 
        return true;             
    } else {
        entrance[0].setAttribute("src", "lose.jpg");
    }

}


