let cartSection = document.querySelector(".Cart-Section");
let cartLogo = document.querySelector(".cart-logo");
let closeCart = document.querySelector(".remove-item");
let AddtoCart = document.querySelectorAll(".addToCart");
let cartCount = document.querySelector("#cart-count");
let totalPrice = document.querySelector("#totalPrice");
let buyBtn = document.querySelector("#buyNow");
let checkOutBox = document.querySelector(".checkOut-box");
let placeOrderBtn = document.querySelector(".placeOrder");
let closeCheckout = document.querySelector("#remove-checkOut");
let shopNowBtn = document.querySelector(".shopBtn");
let productSection = document.querySelector(".Products_section");

shopNowBtn.addEventListener("click", () => {
  productSection.scrollIntoView({
    behavior: "smooth",
  });
});

let count = 0;

cartLogo.addEventListener("click", () => {
  cartSection.classList.add("active");
});
closeCart.addEventListener("click", () => {
  cartSection.classList.remove("active");
});
buyBtn.addEventListener("click", () => {
  checkOutBox.classList.add("active");
  cartSection.classList.remove("active");

  loadCheckoutProducts();
});
placeOrderBtn.addEventListener("click", () => {
  // checkOutBox.classList.remove("active");
  // alert("Your Order is Placed Sucessfully");
});

AddtoCart.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let ProductBox = event.target.closest(".box");

    let Title = ProductBox.querySelector(".Product-name").innerText;
    let IMG = ProductBox.querySelector("img").src;
    let PriceText = ProductBox.querySelector(".price p").innerText;
    let Price = parseFloat(PriceText.replace("$", " "));
    let existingProduct = document.querySelector(
      `.cart-box[data-title="${Title}"]`,
    );

    if (existingProduct) {
      let qtyspan = existingProduct.querySelector(".quantity");
      qtyspan.innerText = parseInt(qtyspan.innerText) + 1;

      // let priceSpan = existingProduct.querySelector('.price p')
      let priceSpan = existingProduct.querySelector(".cart-product-price span");
      priceSpan.innerText = `$${Price * parseInt(qtyspan.innerText)}`;
      updateTotalPrice();
      return;
    }
    addProductToCart(Title, IMG, Price);

    count++;
    cartCount.innerText = count;
    updateTotalPrice();
    let product = {
      title: Title,
      img: IMG,
      price: Price,
      quantity: 1,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
  });
});
function addProductToCart(Title, IMG, Price) {
  let cartBox = document.createElement("div");
  cartBox.classList.add("cart-box");
  cartBox.setAttribute("data-title", Title);

  cartBox.innerHTML = `
    <div class="left-side">
      <div class="cart-img">
        <img src="${IMG}">
      </div>
      <div class="cart-product-details">
        <div class="cart-product-title">
          <span>${Title}</span>
        </div>
        <div class="cart-product-price">
          <span>$${Price}</span>
        </div>
      </div>
    </div>
    <div class="right-side">
      <div class="cart-buttons">
        <button class="decrease">-</button>
        <span class="quantity">1</span>
        <button class="increase">+</button>
      </div>
      <div class="remove-bin">
        <i class="fa-solid fa-trash"></i>
      </div>
    </div>
  `;
  document.querySelector(".cart-items").appendChild(cartBox);

  let decrBtn = cartBox.querySelector(".decrease");
  let incrBtn = cartBox.querySelector(".increase");
  let quant = cartBox.querySelector(".quantity");
  let priceSpan = cartBox.querySelector(".cart-product-price span");

  // Increase Quantity

  incrBtn.addEventListener("click", () => {
    quant.innerText = parseInt(quant.innerText) + 1;
    priceSpan.innerText = `$${Price * parseInt(quant.innerText)}`;
    updateTotalPrice();
  });

  // Decrease Quantity

  decrBtn.addEventListener("click", () => {
    let CurrentQuant = parseInt(quant.innerText);
    if (CurrentQuant > 1) {
      quant.innerText = CurrentQuant - 1;

      priceSpan.innerText = `$${Price * parseInt(quant.innerText)}`;
      updateTotalPrice();
    }
  });

  cartBox.querySelector(".fa-trash").addEventListener("click", () => {
    let title = cartBox.getAttribute("data-title");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.filter((item) => item.title !== title);

    localStorage.setItem("cart", JSON.stringify(cart));
    cartBox.remove();
    count--;
    cartCount.innerText = count;
    updateTotalPrice();
  });
}

function updateTotalPrice() {
  let total = 0;
  let allCartBoxes = document.querySelectorAll(".cart-box");
  allCartBoxes.forEach((box) => {
    let priceText = box.querySelector(".cart-product-price span").innerText;
    let price = parseFloat(priceText.replace("$", ""));

    total += price;
  });
  totalPrice.innerText = `${total}`;

  if (count === 0) {
    buyBtn.disabled = true;
    buyBtn.style.background = "#999";
  } else {
    buyBtn.disabled = false;
    buyBtn.style.background = "black";
  }
}
updateTotalPrice();

// $$$$$$$$$$$$
// ____________

// CheckOut Code
// _____________
// $$$$$$$$$$$$$
// Checkout Elements
let orderContainer = document.querySelector(".order-box");
let subtotalElement = document.querySelector(".subtotal span");
let taxElement = document.querySelector(".tax span");
let shippingElement = document.querySelector(".shipping span");
let totalElement = document.querySelector(".TotalPrice span");

let subTotal = 0;

// Buy Now Button
buyBtn.addEventListener("click", () => {
  checkOutBox.classList.add("active");
  cartSection.classList.remove("active");

  loadCheckoutProducts();
});

closeCheckout.addEventListener("click", () => {
  checkOutBox.classList.remove("active");
});

// checkOut Function

function loadCheckoutProducts() {
  orderContainer.innerHTML = "";
  subTotal = 0;

  let cartItems = document.querySelectorAll(".cart-box");

  cartItems.forEach((item) => {
    let title = item.querySelector(".cart-product-price span").innerText;
    let img = item.querySelector(".cart-img img").src;
    let priceText = item.querySelector(".cart-product-price span").innerText;
    let price = parseFloat(priceText.replace("$", ""));

    let cartBox = document.createElement("div");
    cartBox.classList.add("productBox");

    cartBox.innerHTML = `
     <div class="productBox">
                <img src="${img}"
                    alt="">

                <div class="productName">
                    <p>${title}</p>
                    <p id="productDescr"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, ducimus!</p>

                </div>
            </div>
    `;
    orderContainer.append(cartBox);
    subTotal += price;

    cartBox.scrollIntoView();
  });
  // Subtotal
  subtotalElement.innerText = "$" + subTotal;
  // Tax
  let tax = subTotal * 0.1;
  taxElement.innerText = "$" + tax;
  //  Shipping price
  let shpipping = 5;
  shippingElement.innerText = "$" + shpipping;
  //  Total Last Price
  let TotalPrice = subTotal + tax + shpipping;
  totalElement.innerText = "$" + TotalPrice;
}

let fromInputs = document.querySelectorAll("form input");

placeOrderBtn.addEventListener("click", () => {
  let isEmpty = false;

  fromInputs.forEach((input) => {
    if (input.value.trim() === "") {
      isEmpty = true;
      input.style.border = "1px solid red";
    } else {
      input.style.border = "1px solid #999";
    }
  });

  if (subTotal === 0) {
    alert("Your Cart is Empty");
    return;
  }

  if (isEmpty) {
    alert("Please Fill All Shipping Required Fields");
    return;
  }

  alert("Your Order is Placed Successfully!");

  checkOutBox.classList.remove("active");
});

window.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.forEach((item) => {
    addProductToCart(item.title, item.img, item.price);
    count++;
  });

  cartCount.innerText = count;
  updateTotalPrice();
});

//  ///////////////////
// Like Section
// ////////////////////
let likeLogo = document.querySelector("#like_logo");
let likeCount = document.querySelector("#like-count");
let addToLike = document.querySelectorAll(".Like");

let countLike = 0;

addToLike.forEach((btn) => {
  btn.addEventListener("click", () => {
    // fill heart on product
    btn.classList.remove("fa-regular");
    btn.classList.add("fa-solid");
    btn.style.color = "black";

    // fill navbar heart
    likeLogo.classList.remove("fa-regular");
    likeLogo.classList.add("fa-solid");

    // increase counter
    countLike++;
    likeCount.innerText = countLike;
  });
});
