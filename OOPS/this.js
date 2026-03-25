// console.log(this);
let user = {
  name: "Hasnain",
  sayHi() {
    console.log(`Hi ${this.name} Wellcome Back`);
  },
};
console.log(user.sayHi());
