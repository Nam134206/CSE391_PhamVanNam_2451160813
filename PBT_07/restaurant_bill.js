
const menu = [
    {
        name: "Phở bò",
        price: 65000,
        quantity: 2
    },
    {
        name: "Bún chả",
        price: 55000,
        quantity: 1
    }
];


// Có tính tip hay không
const hasTip = true;

// Ngày hiện tại
const today = new Date().getDay();


// =========================
// TÍNH TIỀN
// =========================

let subtotal = 0;

// In danh sách món
console.log("╔══════════════════════════════════════════════╗");
console.log("║            HÓA ĐƠN NHÀ HÀNG                 ║");
console.log("╠══════════════════════════════════════════════╣");


for (let i = 0; i < menu.length; i++) {

    const item = menu[i];

    const itemTotal = item.price * item.quantity;

    subtotal += itemTotal;

    console.log(
        `║ ${i + 1}. ${item.name.padEnd(12)} x${String(item.quantity).padEnd(3)} @${(item.price / 1000)}k = ${(itemTotal / 1000)}k ║`
    );
}


// =========================
// GIẢM GIÁ
// =========================

let discountPercent = 0;


// Tổng > 1 triệu → giảm 15%
if (subtotal > 1000000) {

    discountPercent = 15;

// Tổng > 500k → giảm 10%
} else if (subtotal > 500000) {

    discountPercent = 10;
}


// Wednesday → giảm thêm 5%
if (today === 3) {

    discountPercent += 5;
}


// Tiền giảm
const discountAmount = subtotal * discountPercent / 100;


// Sau giảm giá
const afterDiscount = subtotal - discountAmount;


// VAT 8%
const vat = afterDiscount * 0.08;


// Tip 5%
let tip = 0;

if (hasTip) {

    tip = afterDiscount * 0.05;
}


// Tổng thanh toán
const totalPayment = afterDiscount + vat + tip;


// =========================
// IN HÓA ĐƠN
// =========================

console.log("╠══════════════════════════════════════════════╣");

console.log(
    `║ Tổng cộng:          ${subtotal.toLocaleString()}đ ║`
);

console.log(
    `║ Giảm giá (${discountPercent}%):     -${discountAmount.toLocaleString()}đ ║`
);

console.log(
    `║ VAT (8%):             ${vat.toLocaleString()}đ ║`
);

console.log(
    `║ Tip (5%):             ${tip.toLocaleString()}đ ║`
);

console.log("╠══════════════════════════════════════════════╣");

console.log(
    `║ THANH TOÁN:        ${totalPayment.toLocaleString()}đ ║`
);

console.log("╚══════════════════════════════════════════════╝");