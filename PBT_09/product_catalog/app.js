const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", rating: 4.5 },
    { id: 2, name: "Samsung S24", price: 22990000, category: "phone", rating: 4.3 },
    { id: 3, name: "Xiaomi 14", price: 15990000, category: "phone", rating: 4.1 },
    { id: 4, name: "MacBook M3", price: 35990000, category: "laptop", rating: 4.8 },
    { id: 5, name: "Dell XPS 13", price: 29990000, category: "laptop", rating: 4.6 },
    { id: 6, name: "Asus ROG", price: 45990000, category: "laptop", rating: 4.7 },
    { id: 7, name: "iPad Pro", price: 21990000, category: "tablet", rating: 4.7 },
    { id: 8, name: "Galaxy Tab S9", price: 18990000, category: "tablet", rating: 4.4 },
    { id: 9, name: "iPad Mini", price: 13990000, category: "tablet", rating: 4.3 },
    { id: 10, name: "AirPods Pro", price: 5990000, category: "accessory", rating: 4.6 },
    { id: 11, name: "Logitech Mouse", price: 990000, category: "accessory", rating: 4.2 },
    { id: 12, name: "Oppo Find X", price: 18990000, category: "phone", rating: 4.2 }
];

let state = {
    search: "",
    category: "all",
    sort: "default",
    cart: 0,
    dark: false
};

const grid = document.querySelector("#productGrid");
const search = document.querySelector("#search");
const cartBadge = document.querySelector("#cartBadge");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modalContent");

/* FILTER ENGINE */
function getData() {
    let res = [...products];

    if (state.search) {
        res = res.filter(p =>
            p.name.toLowerCase().includes(state.search.toLowerCase())
        );
    }

    if (state.category !== "all") {
        res = res.filter(p => p.category === state.category);
    }

    if (state.sort === "price_asc") res.sort((a,b)=>a.price-b.price);
    if (state.sort === "price_desc") res.sort((a,b)=>b.price-a.price);
    if (state.sort === "name") res.sort((a,b)=>a.name.localeCompare(b.name));
    if (state.sort === "rating") res.sort((a,b)=>b.rating-a.rating);

    return res;
}

/* RENDER */
function render() {
    grid.innerHTML = "";

    getData().forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.id = p.id;

        card.innerHTML = `
            <h3>${p.name}</h3>
            <p>${p.price.toLocaleString()} VND</p>
            <p>⭐ ${p.rating}</p>
            <button class="add">Add</button>
        `;

        grid.appendChild(card);
    });

    cartBadge.textContent = state.cart;
}

render();

/* SEARCH */
search.addEventListener("input", e => {
    state.search = e.target.value;
    render();
});

/* CATEGORY */
document.querySelector("#categoryBar").addEventListener("click", e => {
    if (!e.target.dataset.category) return;
    state.category = e.target.dataset.category;
    render();
});

/* SORT */
document.querySelector("#sort").addEventListener("change", e => {
    state.sort = e.target.value;
    render();
});

/* GRID EVENTS (DELEGATION) */
grid.addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (!card) return;

    const id = Number(card.dataset.id);
    const product = products.find(p => p.id === id);

    if (e.target.classList.contains("add")) {
        state.cart++;
        cartBadge.textContent = state.cart;
        return;
    }

    modal.classList.add("show");
    modalContent.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.price.toLocaleString()} VND</p>
        <p>Rating: ${product.rating}</p>
    `;
});

/* CLOSE MODAL */
modal.addEventListener("click", () => {
    modal.classList.remove("show");
});

/* DARK MODE */
document.querySelector("#darkToggle").addEventListener("click", () => {
    state.dark = !state.dark;
    document.body.classList.toggle("dark-mode");
});