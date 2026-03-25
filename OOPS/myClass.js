class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
  enctyptPassword() {
    return `${this.password}abc`;
  }
  toUppercase() {
    return `${this.userName.toUpperCase()}`;
  }
}

let u1 = new User("Hasnain", "hk4547124@gmail.com", 123);
console.log(u1.enctyptPassword());
console.log(u1.toUppercase());
