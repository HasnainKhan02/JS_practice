// let promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Promise is run");
//     resolve();
//   }, 2000);
// });

// promiseOne.then(function(){
//     console.log("Resolved");
// })
// // promiseOne.reject(function(){
// //     console.log("Rejected");
// // })

// let promiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ user: "Hasnain", age: "21" });
//     } else {
//       reject("Error in Your Code");
//     }
//   }, 3000);
// })
//   .then((user) => {
//     console.log(user);

//     console.log("Then is Run");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function getAllUsers() {
  try {
    let response = await fetch("https://jsoffnplaceholder.typicode.com/users");
    console.log(response);
    let data = await response.json();
    data.forEach((user) => {
      console.log("Name ", user.name , ": ","Phone ", user.phone , ": ", "City" , user.address);
    });
  } catch (error) {
    console.log("Error", error);
  }
}
getAllUsers();

// Promise = new Promise((resolve, reject) => {
//   icecream = true;
//   if (!icecream) {
//     reject("IceCream Not Avilable ");
//   } else {
//     resolve("IceCream Done");
//   }
// })
//   .then((msg) => {
//     console.log("Success:", msg);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// async function GeticeCream() {
//   icecream = false;
//   if (!icecream) {
//     throw "icecream not Found";
//   } else {
//     return "iceCream Found Successfully";
//   }
// }

// GeticeCream()
//   .then((msg) => {
//     console.log("Resolved", msg);
//   })
//   .catch((err) => {
//     console.log("Rejected :", err);
//   });

// async function getApi() {
//   let APi = await fetch("https://jsonplaceholder.typicode.com/users");
//   let response = await APi.json();
//   response.forEach((user) => {
//     console.log("Name", user.name, "|", "City", user.address.city);
//   });
// }
// getApi();

async function getApi() {
  let Api = await fetch("https://jsonplaceholder.typicode.com/users");
  let response = await Api.json();
  response.forEach((user) => {
    console.log(user.name);
  });
}
getApi();
