// //////////////
// Golden Line

// Inheritance allows multiple classes to share common properties and methods from a parent class using extends and super.
// /////////

// class User {
//   constructor(userName, age) {
//     this.userName = userName;
//     this.age = age;
//   }
//   logME() {
//     console.log(`UserName is ${this.userName} Age is ${this.age}`);
//   }
// }

// class Teacher extends User {
//   constructor(username, age, email, password) {
//     super(username, age);
//     this.email = email;
//     this.password = password;
//   }
// }
// let teacher = new Teacher("Hasnain", "21", "has@123", "1234");
// console.log(teacher);

class User {
  constructor(name) {
    this.name = name;
  }
  logIN() {
    console.log(`Hi ${this.name} Welcome to Web development`);
  }
}

class Admin extends User {
  constructor(userName, age, email, password, Role) {
    super(userName);
    this.age = age;
    this.email = email;
    this.password = password;
    this.role = Role;
  }
}
class teacher extends User {
  constructor(userName, age, email, password, Role) {
    super(userName);
    this.age = age;
    this.email = email;
    this.password = password;
    this.role = Role;
  }
}
const user1 = new Admin("Hasnain", "21", "abc@gmail.com", "12345", "Admin");
const user2 = new teacher("Ali", "26", "zxc@gmail.com", "43422", "Teacher");
console.log(user1.logIN(), user2.logIN());
class User {
  constructor(name) {
    this.name = name;
  }
  logIN() {
    console.log(`Hi ${this.name} Welcome to Web development`);
  }
}

class Admin extends User {
  constructor(userName, age, email, password, Role) {
    super(userName);
    this.age = age;
    this.email = email;
    this.password = password;
    this.role = Role;
  }
}
class teacher extends User {
  constructor(userName, age, email, password, Role) {
    super(userName);
    this.age = age;
    this.email = email;
    this.password = password;
    this.role = Role;
  }
}
const user1 = new Admin("Hasnain", "21", "abc@gmail.com", "12345", "Admin");
const user2 = new teacher("Ali", "26", "zxc@gmail.com", "43422", "Teacher");
console.log(user1, user2);

