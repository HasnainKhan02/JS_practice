// function multiply(num) {
//   return num * 5;
// }

// console.log(multiply(5));
// console.log(multiply.prototype);
function SetUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "Hasnain@123", "123");
console.log(chai);
