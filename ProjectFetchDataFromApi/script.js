async function getProducts() {
  try {
    let APi = await fetch("https://fakestoreapi.com/products");
    let response = await APi.json();

    response.forEach((data) => {
      let box = document.querySelector(".box");
      box.innerHTML += `
                <div class="boxes">
                <img src="${data.image}">
                <h4>${data.title}</h4>
                <span>$${data.price}</span>
                <p> Rating ${data.rating.rate}</p>
                <p> count ${data.rating.count}</p>
                
        </div>
        
        `;
      console.log(
        `Products Name :${data.title} , Products Prices: ${data.price}`,
      );
    });
  } catch (error) {
    console.log(`Error ${error}`);
  }
}
getProducts();
