let productImages = document.querySelectorAll(".productImgBox img");
let productViewContainer = document.querySelector(".productView");

productImages.forEach((img) => {
  img.addEventListener("click", () => {
    let card = img.closest(".productCard");

    let image = card.querySelector("img").src;
    let title = card.querySelector(".productNamePrice h4").innerText;
    let descr = card.querySelector(".productDescr").innerText;
    let price = card.querySelector(".productNamePrice p").innerText;

    productViewContainer.innerHTML = `
        <div class="leftSide">
            <img src="${image}" alt="">
        </div>
        <div class="rightSide">
            <div class="rightInfoPart">
                <h2>${title}</h2>
                <p>${descr}</p>
                <div class="productRating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
            </div>

            <div class="rightPrice">
                <p>${price}</p>
            </div>

            <div class="quantityWrapper">
                <div class="rightQuantityPart">
                    <button class="qtyBtn minus">-</button>
                    <span class="qtyValue">1</span>
                    <button class="qtyBtn plus">+</button>
                </div>
                <div class="stockText">
                    <p>Only <span class="highlight">12 Items</span> Left!</p>
                    <p class="subText">Don't miss it</p>
                </div>
            </div>

            <div class="rightButtonsPart">
                <button id="buyNow">Buy Now</button>
                <button id="cartBtn">Add to Cart</button>
                <i class="fa-solid fa-xmark closeBtn"></i>
            </div>
        </div>
    `;

    productViewContainer.classList.add("active");
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("closeBtn")) {
    productViewContainer.classList.remove("active");
  }
});
// $$$$$$$$$$$$$$$$$$$
// Cart System
// $$$$$$$$$$$$$$$$$$$
// ///////////////////
let cartClose = document.querySelector(".closeCart");
let CartBox = document.querySelector(".cartBox");
let CartLogo = document.querySelector(".CartLogo");
let cartItems = document.querySelector(".cartItems");

CartLogo.addEventListener("click", () => {
  CartBox.classList.add("active");
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("closeCart")) {
    CartBox.classList.remove("active");
  }
});

let AddToCart = document.querySelectorAll(".cartBtn");

AddToCart.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.background = "green";

    let box = btn.closest(".productCard");

    let image = box.querySelector("img").src;
    let title = box.querySelector(".productNamePrice h4").innerText;
    let descr = box.querySelector(".productDescr").innerText;
    let price = box.querySelector(".productNamePrice p").innerText;

    let item = document.createElement("div");
    item.classList.add("itemBox");

    item.innerHTML = `
        <div class="imgBox">
            <img src="${image}" alt="">
        </div>
        <div class="itemInfoBox">
            <h3>${title}</h3>
            <p>${descr}</p>
            <span>${price}</span>
            <div class="quantityWrapper itemBoxQuant">
                <div class="rightQuantityPart Quantity">
                    <button class="qtyBtn minus">-</button>
                    <span class="qtyValue">1</span>
                    <button class="qtyBtn plus">+</button>
                    </div>
                    <div><i class="fa-solid fa-trash removeBtn"></i></div>
            </div>
        </div>
    `;

    cartItems.appendChild(item);
    CartBox.classList.add("active");
    let decrBtn = item.querySelector(".minus");
    let incrBtn = item.querySelector(".plus");
    let valueCount = item.querySelector(".qtyValue");

    incrBtn.addEventListener("click", () => {
      valueCount.innerText = parseInt(valueCount.innerText) + 1;
    });

    decrBtn.addEventListener("click", () => {
      if (parseInt(valueCount.innerText) > 1) {
        valueCount.innerText = parseInt(valueCount.innerText) - 1;
      }
    });
    let RemoveItem = item.querySelector(".removeBtn");
    RemoveItem.addEventListener("click", () => {
      item.remove();
    });
  });
});
// Images Slider
let images = [
  "images/banners/banner1.jpg",
  "images/banners/banner2.jpg",
  "images/banners/banner3.jpg",
  "images/banners/banner4.jpg",
  "images/banners/banner5.jpg",
  "images/banners/banner6.jpg",
  "images/banners/banner7.jpg",
  "images/banners/hero1.jpg",
];

let index = 0;

let slider = document.querySelector(".bannerImg");

setInterval(() => {
  index++;

  if (index >= images.length) {
    index = 0;
  }

  slider.style.backgroundImage = `url(${images[index]})`;
}, 4000);

// Qty Buttons
