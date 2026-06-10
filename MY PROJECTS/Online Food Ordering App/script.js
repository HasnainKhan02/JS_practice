document.addEventListener("DOMContentLoaded", () => {
  // 1. HOME PAGE LOGIC: Save data when a box is clicked
  let boxes = document.querySelectorAll(".box1");
  boxes.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Prevent the default link behavior for a split second to save data
      let title = btn.querySelector(".title").innerText;
      let img = btn.querySelector(".imgBox img").src;

      // Save info to browser storage
      localStorage.setItem("selectedFoodTitle", title);
      localStorage.setItem("selectedFoodImg", img);
    });
  });

  // 2. ITEM PAGE LOGIC: Check if we are on the item page and update the UI
  let productShow = document.querySelector(".app-container .show");

  // Only run this if we are on item.html (where .show exists)
  if (productShow && localStorage.getItem("selectedFoodTitle")) {
    let title = localStorage.getItem("selectedFoodTitle");
    let img = localStorage.getItem("selectedFoodImg");

    productShow.innerHTML = `
            <header class="header">
                <div class="top-nav">
                    <i class="fa-solid fa-arrow-left" onclick="history.back()"></i>
                </div>
                <div class="image-container">
                    <img src="${img}" alt="${title}" class="main-food-img">
                </div>
                <svg class="curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fill-opacity="1" d="M0,224L120,202.7C240,181,480,139,720,138.7C960,139,1200,181,1320,202.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg>
            </header>
            <main class="content">
                <div class="title-row">
                    <div>
                        <h1>${title}</h1>
                        <p class="subtitle">Freshly Prepared</p>
                    </div>
                    <div class="heart-icon">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
                <div class="pricing-row">
                    <div class="stats">
                        <span class="rating"><i class="fa-solid fa-star"></i> 4.9</span>
                        <span class="distance"><i class="fa-solid fa-location-dot"></i> 1.2 km</span>
                        <span class="time"><i class="fa-regular fa-clock"></i> 30 mins</span>
                    </div>
                    <div class="price-container">
                        <span class="old-price">Rp 60.000</span>
                        <span class="current-price">Rp 59.000</span>
                    </div>
                </div>
                <section class="ingredients">
                    <h3>Ingredients:</h3>
                    <p>Delicious ${title} made with high quality ingredients and fresh toppings for a perfect meal.</p>
                </section>
            </main>
            <footer class="action-bar">
                <div class="quantity-selector">
                    <button class="qty-btn" onclick="updateQty(1)">+</button>
                    <span class="qty-value" id="qty-val">1</span>
                    <button class="qty-btn" onclick="updateQty(-1)">-</button>
                </div>
                <button class="add-to-cart">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
            </footer>
        `;
  }
});

// Simple helper for the quantity buttons
function updateQty(val) {
  let el = document.getElementById("qty-val");
  let current = parseInt(el.innerText);
  if (current + val > 0) el.innerText = current + val;
}

// ADD TO CART
