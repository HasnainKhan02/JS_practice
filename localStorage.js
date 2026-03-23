let student = {
  name: "Hasnain",
  university: "Swabi",
  age: "21",
};

localStorage.setItem("student", JSON.stringify(student));

let data = JSON.parse(localStorage.getItem("student"));
console.log(data.university);
