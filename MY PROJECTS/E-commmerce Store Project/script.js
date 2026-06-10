// ===== DATA =====
const products = [
  {
    id: 1,
    name: "AirPods Pro Max",
    desc: "Active noise cancellation, spatial audio, premium comfort",
    price: 299,
    cat: "audio",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80&fit=crop",
    badge: "New",
    hot: false,
  },
  {
    id: 2,
    name: "Galaxy Buds Ultra",
    desc: "Crystal clear sound with 36hr battery life and fast charging",
    price: 149,
    cat: "audio",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80&fit=crop",
    badge: null,
    hot: false,
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    desc: "Industry-leading noise cancelling headphones with LDAC",
    price: 349,
    cat: "audio",
    img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80&fit=crop",
    badge: "Sale",
    hot: false,
  },
  {
    id: 4,
    name: "Apple Watch Ultra",
    desc: "Titanium case, 60hr battery, precision dual-frequency GPS",
    price: 799,
    cat: "wearables",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80&fit=crop",
    badge: null,
    hot: true,
  },
  {
    id: 5,
    name: "Pixel Watch 3",
    desc: "Heart rate, ECG, sleep tracking, Google AI integration",
    price: 349,
    cat: "wearables",
    img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&q=80&fit=crop",
    badge: "New",
    hot: false,
  },
  {
    id: 6,
    name: "MacBook Sleeve Pro",
    desc: "Premium vegan leather, fits 13–16 inch laptops perfectly",
    price: 89,
    cat: "accessories",
    img: "https://images.unsplash.com/photo-1611461527944-1a718332613b?w=600&q=80&fit=crop",
    badge: null,
    hot: false,
  },
  {
    id: 7,
    name: "MagSafe Charger 3",
    desc: "20W fast wireless charging for iPhone 15 and accessories",
    price: 49,
    cat: "accessories",
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80&fit=crop",
    badge: null,
    hot: false,
  },
  {
    id: 8,
    name: "SteelSeries Arctis Nova",
    desc: "Premium gaming headset with 360° spatial audio engine",
    price: 249,
    cat: "gaming",
    img: "https://images.unsplash.com/photo-1599669454699-248893623440?w=600&q=80&fit=crop",
    badge: "Hot",
    hot: true,
  },
  {
    id: 9,
    name: "Jabra Evolve2 85",
    desc: "Professional noise cancelling with FlexBoom microphone",
    price: 379,
    cat: "audio",
    img: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&q=80&fit=crop",
    badge: null,
    hot: false,
  },
  {
    id: 10,
    name: "Razer DeathAdder V3",
    desc: "Ergonomic esports mouse, 30K DPI optical sensor",
    price: 99,
    cat: "gaming",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&fit=crop",
    badge: "Sale",
    hot: false,
  },
  {
    id: 11,
    name: "Anker PowerCore 27K",
    desc: "Huge 27,650mAh capacity, PD 65W, charges laptops",
    price: 79,
    cat: "accessories",
    img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80&fit=crop",
    badge: null,
    hot: false,
  },
  {
    id: 12,
    name: "Fitbit Charge 6",
    desc: "Google GPS, heart rate, Stress Score, 7-day battery",
    price: 159,
    cat: "wearables",
    img: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&q=80&fit=crop",
    badge: null,
    hot: false,
  },
];

const heroSlides = [
  {
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80&fit=crop",
  },
  {
    img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200&q=80&fit=crop",
  },
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&fit=crop",
  },
  {
    img: "https://images.unsplash.com/photo-1599669454699-248893623440?w=1200&q=80&fit=crop",
  },
];

// ===== STATE =====
let cart = [];
let currentFilter = "all";
let currentProduct = null;
let modalQty = 1;
let sortAsc = false;
let wishlist = new Set();

// ===== HERO SLIDER =====
(function initHero() {
  const cont = document.getElementById("heroSlides");
  const dots = document.getElementById("heroDots");
  let active = 0;
  heroSlides.forEach((s, i) => {
    const el = document.createElement("div");
    el.className = "hero-slide" + (i === 0 ? " active" : "");
    el.style.backgroundImage = `url(${s.img})`;
    cont.appendChild(el);
    const d = document.createElement("div");
    d.className = "hero-dot" + (i === 0 ? " active" : "");
    d.onclick = () => goTo(i);
    dots.appendChild(d);
  });
  function goTo(n) {
    cont.children[active].classList.remove("active");
    dots.children[active].classList.remove("active");
    active = n;
    cont.children[active].classList.add("active");
    dots.children[active].classList.add("active");
  }
  setInterval(() => goTo((active + 1) % heroSlides.length), 4200);
})();

// ===== RENDER PRODUCTS =====
function renderProducts() {
  const grid = document.getElementById("productGrid");
  const count = document.getElementById("productCount");
  let list =
    currentFilter === "all"
      ? [...products]
      : products.filter((p) => p.cat === currentFilter);
  const q = document.getElementById("searchInput").value.toLowerCase();
  if (q)
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q),
    );
  if (sortAsc) list.sort((a, b) => a.price - b.price);
  else list.sort((a, b) => b.price - a.price);
  count.textContent = list.length + " products";
  grid.innerHTML = "";
  list.forEach((p, i) => {
    const inCart = cart.some((c) => c.id === p.id);
    const wished = wishlist.has(p.id);
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = i * 0.05 + "s";
    card.innerHTML = `
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<div class="badge${p.hot ? " hot" : ""}">${p.badge}</div>` : ""}
        <div class="wishlist-btn${wished ? " loved" : ""}" data-id="${p.id}">
          <i class="fa-${wished ? "solid" : "regular"} fa-heart"></i>
        </div>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-bottom">
          <div class="product-price">$${p.price}</div>
          <div class="product-rating">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
        </div>
        <button class="add-btn${inCart ? " added" : ""}" data-id="${p.id}">
          ${inCart ? '<i class="fa-solid fa-check"></i> In Bag' : "Add to Bag"}
        </button>
      </div>
    `;
    // click image → modal
    card
      .querySelector(".product-img")
      .addEventListener("click", () => openModal(p));
    // wishlist
    card.querySelector(".wishlist-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      if (wishlist.has(p.id)) wishlist.delete(p.id);
      else wishlist.add(p.id);
      renderProducts();
    });
    // add to cart
    card.querySelector(".add-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      if (!inCart) addToCart(p);
    });
    grid.appendChild(card);
  });
}

// ===== FILTERS =====
document.querySelectorAll(".filter-chip").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-chip")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.cat;
    renderProducts();
  });
});
document.getElementById("sortBtn").addEventListener("click", () => {
  sortAsc = !sortAsc;
  renderProducts();
});
document
  .getElementById("searchInput")
  .addEventListener("input", renderProducts);
document.getElementById("mobileSearch").addEventListener("input", (e) => {
  document.getElementById("searchInput").value = e.target.value;
  renderProducts();
});

// ===== MODAL =====
function openModal(p) {
  currentProduct = p;
  modalQty = 1;
  document.getElementById("modalImg").src = p.img;
  document.getElementById("modalTitle").textContent = p.name;
  document.getElementById("modalDesc").textContent = p.desc;
  document.getElementById("modalPrice").textContent = "$" + p.price;
  document.getElementById("modalTag").textContent =
    p.cat.charAt(0).toUpperCase() + p.cat.slice(1);
  document.getElementById("modalQty").textContent = 1;
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
});
document.getElementById("modalPlus").addEventListener("click", () => {
  document.getElementById("modalQty").textContent = ++modalQty;
});
document.getElementById("modalMinus").addEventListener("click", () => {
  if (modalQty > 1)
    document.getElementById("modalQty").textContent = --modalQty;
});
document.getElementById("modalAddCart").addEventListener("click", () => {
  if (currentProduct) addToCart(currentProduct, modalQty);
  closeModal();
});

// ===== CART =====
function addToCart(p, qty = 1) {
  const existing = cart.find((c) => c.id === p.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...p, qty });
  }
  updateCartUI();
  renderProducts();
  showToast(p.name + " added!");
}
function updateCartUI() {
  const list = document.getElementById("cartItemsList");
  const badge = document.getElementById("cartBadge");
  const empty = document.getElementById("cartEmpty");
  const total = document.getElementById("cartTotal");
  const totalCount = cart.reduce((s, c) => s + c.qty, 0);
  badge.textContent = totalCount;
  badge.classList.toggle("show", totalCount > 0);
  list.innerHTML = "";
  if (cart.length === 0) {
    list.appendChild(empty);
    return;
  }
  let sum = 0;
  cart.forEach((item) => {
    sum += item.price * item.qty;
    const el = document.createElement("div");
    el.className = "cart-item";
    el.innerHTML = `
      <div class="cart-item-img"><img src="${item.img}" alt="${item.name}"></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-row">
          <div class="mini-qty">
            <button class="minus-btn" data-id="${item.id}">−</button>
            <span>${item.qty}</span>
            <button class="plus-btn" data-id="${item.id}">+</button>
          </div>
          <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        </div>
        <i class="fa-solid fa-trash remove-item" data-id="${item.id}"></i>
      </div>
    `;
    el.querySelector(".minus-btn").onclick = () => {
      if (item.qty > 1) {
        item.qty--;
      } else {
        cart.splice(cart.indexOf(item), 1);
      }
      updateCartUI();
      renderProducts();
    };
    el.querySelector(".plus-btn").onclick = () => {
      item.qty++;
      updateCartUI();
      renderProducts();
    };
    el.querySelector(".remove-item").onclick = () => {
      cart.splice(cart.indexOf(item), 1);
      updateCartUI();
      renderProducts();
    };
    list.appendChild(el);
  });
  total.textContent = "$" + sum.toFixed(2);
}
// cart open/close
function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCartFn() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.body.style.overflow = "";
}
document.getElementById("cartNavBtn").addEventListener("click", openCart);
document.getElementById("cartBottomBtn").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCartFn);

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

// ===== MOBILE MENU =====
document.getElementById("menuBtn").addEventListener("click", () => {
  const m = document.getElementById("mobileMenu");
  const icon = document.getElementById("menuIcon");
  const open = m.classList.toggle("open");
  icon.className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

// ===== BOTTOM NAV =====
document.querySelectorAll(".bottom-btn").forEach((b) => {
  b.addEventListener("click", function () {
    document
      .querySelectorAll(".bottom-btn")
      .forEach((x) => x.classList.remove("active"));
    this.classList.add("active");
  });
});

// ===== INIT =====
renderProducts();
