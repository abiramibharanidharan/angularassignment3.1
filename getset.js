var login = (function () {
    function login() {
    }
    //to get the value of username
    login.prototype.getUserName = function () {
        console.log("The username is =" + this.username);
        return this.username;
    };
    //to set the value of user name
    login.prototype.setUserName1 = function (value) {
        this.username = value;
        console.log("To set the username =" + this.username);
    };
    return login;
}());
// to set the obj to the class
var login1 = new login();
login1.username = "abi";
// to call the class function
login1.getUserName();
// to check the username is vlid or not
if (login1.username == "abi") {
    console.log("The username " + login1.username + " is valid");
}
else {
    console.log("The user is not valid");
}
login1.setUserName1("raj");
