async function getAllusers() {
  try {
    let users = await fetch("https://randomuser.me/api/?results=5");
    let response = await users.json();

    response.results.forEach((user) => {
      console.log(`
      Name: ${user.name.first} ${user.name.last}
      Email: ${user.email}
      City: ${user.location.city}
      Image: ${user.picture.medium}
    `);
    });
  } catch (error) {
    console.log(`Error ${error}`);
  }
}
getAllusers();
let box1 = document.querySelector(".boxes1");
box1.innerHTML = `
  <div class="boxes">
<h1>${$user.name.first}</h1>

  </div>
`;
