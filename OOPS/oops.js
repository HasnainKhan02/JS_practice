let user = {
  userName: "Hasnain",
  count: 21,
  isLogin: true,
  Hi() {
    // console.log(`Hi ${this.userName} Wellcome Back`);
    console.log(this);
  },
};

// console.log(user);
// /////////////////////////////
//  Very Important Interview Line
// //////////////////////////////

// In JavaScript, when a function is inside an object, it is called a method, and this refers to the object that calls the method.

function User(Username, loginCount, isLoggedIn) {
  this.userName = Username;
  this.count = loginCount;
  this.isLogin = isLoggedIn;

  return this;
}

const userOne = new User("Hasnain", 12, true);
const userTwo = new User("Ali", 10, false);
console.log(userOne);
console.log(userTwo);
