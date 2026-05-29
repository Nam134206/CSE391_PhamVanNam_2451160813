Phần A:
Câu A1:
1. Function Declaration
function tinhThueBaoHiem(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    
    return {
        thue,
        thuc_nhan: luong - thue
    };
}
console.log(tinhThueBaoHiem(15000000));
2. Function Expression
const tinhThueBaoHiem = function(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};
console.log(tinhThueBaoHiem(15000000));
3. Arrow Function
const tinhThueBaoHiem = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};
console.log(tinhThueBaoHiem(15000000));
- Hosisting khác nhau như là:
1. Function Declaration — HOISTING FULL
Có thể gọi hàm trước khi khai báo.
console.log(chao());

function chao() {
    return "Xin chào";
}
Chạy bình thường vì:
Function Declaration được hoisting toàn bộ
JavaScript đưa cả function lên đầu scope
2. Function Expression — KHÔNG hoisting function
console.log(chao())
const chao = function() {
    return "Xin chào";
};
 Lỗi:
ReferenceError: Cannot access 'chao' before initialization
Vì:
Chỉ biến chao được hoisting
Nhưng chưa được gán function lúc gọi
3. Arrow Function — giống Function Expression
console.log(chao());
const chao = () => {
    return "Xin chào";
};
 Cũng lỗi:
ReferenceError: Cannot access 'chao' before initialization
Vì Arrow Function thường được gán vào const hoặc let, nên không dùng trước khi khai báo.
Câu A2:
Đoạn 1
function counter() {
    let count = 0;

    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const c = counter();
console.log(c.increment());
console.log(c.increment());
console.log(c.increment());
console.log(c.decrement());
console.log(c.getCount());
Dự đoán output
1
2
3
2
2
Giải thích
Closure — "Hàm con nhớ biến cha"
Theo tài liệu:
"Hàm con nhớ được biến của hàm cha, ngay cả khi hàm cha đã chạy xong."
Trong function:
let count = 0;
Biến count thuộc function scope của counter()
Các arrow function:
increment
decrement
getCount
đều là closure nên chúng vẫn nhớ và truy cập được count.
Từng bước
Ban đầu
count = 0
increment() lần 1
++count
=> count = 1
Output:
1
increment() lần 2
=> count = 2
2
increment() lần 3
=> count = 3
3
decrement()
--count
=> count = 2
2
getCount()
Trả về giá trị hiện tại:
2
Đoạn 2
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
Output
Sau khoảng 200ms:
var: 3
var: 3
var: 3
-
let: 0
let: 1
let: 2
Giải thích chi tiết:
1. var — Function Scope
var thuộc function scope
Không tạo block scope trong vòng lặp
Trong loop:
for (var i = 0; i < 3; i++)
Chỉ tồn tại 1 biến i duy nhất cho toàn bộ vòng lặp
Quá trình chạy
Loop chạy rất nhanh
i = 0
i = 1
i = 2
Sau khi loop kết thúc:
i = 3
setTimeout chạy SAU loop
Callback:
() => console.log("var:", i)
không chạy ngay
Nó đợi 100ms
Đến lúc chạy thì:
i = 3
Nên cả 3 callback đều in:
var: 3
2. let — Block Scope
Block Scope = Ngăn kéo bàn
Mỗi lần lặp:
for (let j = 0; j < 3; j++)
JavaScript tạo ra một biến j mới riêng biệt.
Thực tế giống như:
Lần 1: j = 0
Lần 2: j = 1
Lần 3: j = 2
Mỗi callback giữ giá trị riêng của nó.
Sau 200ms:
let: 0
let: 1
let: 2
Câu A3:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. Lấy các số chẵn
const evenNums = nums.filter(n => n % 2 === 0);
// → [2, 4, 6, 8, 10]
// 2. Nhân mỗi số với 3
const tripleNums = nums.map(n => n * 3);
// → [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
// 3. Tính tổng tất cả
const total = nums.reduce((sum, n) => sum + n, 0);
// → 55
// 4. Tìm số đầu tiên > 7
const firstGreaterThan7 = nums.find(n => n > 7);
// → 8
// 5. Kiểm tra CÓ số > 10 không
const hasGreaterThan10 = nums.some(n => n > 10);
// → false
// 6. Kiểm tra TẤT CẢ đều > 0
const allPositive = nums.every(n => n > 0);
// → true
// 7. Tạo mảng "Số X là [chẵn/lẻ]"
const evenOddText = nums.map(
    n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`
);
// → ["Số 1 là lẻ", "Số 2 là chẵn", ...]
// 8. Đảo ngược mảng (không mutate gốc)
const reversedNums = [...nums].reverse();
// → [10, 9, 8, ..., 1]
Phần C:
Câu C1:
const processOrders = (orders) =>
    orders
        .filter(({ status, total }) =>
            status === "completed" && total > 100000
        )
        .map(({ id, customer, total }) => {
            const discount = total * 0.1;

            return {
                id,
                customer,
                total,
                discount,
                finalTotal: total - discount
            };
        })
        .sort((a, b) => b.finalTotal - a.finalTotal);
Câu C2:
Câu C2 (10đ) — Thiết kế API
Bạn đang thiết kế một thư viện JS nhỏ miniArray cung cấp map, filter, reduce TỰ VIẾT (không dùng built-in).

const miniArray = {
    map(arr, fn) {
        // Implement: giống Array.prototype.map
    },
    filter(arr, fn) {
        // Implement: giống Array.prototype.filter
    },
    reduce(arr, fn, initialValue) {
        // Implement: giống Array.prototype.reduce
    }
};
// Test phải pass:
console.log(miniArray.map([1,2,3], x => x * 2));        // → [2,4,6]
console.log(miniArray.filter([1,2,3,4], x => x > 2));    // → [3,4]
console.log(miniArray.reduce([1,2,3,4], (a,b) => a+b, 0)); // → 10