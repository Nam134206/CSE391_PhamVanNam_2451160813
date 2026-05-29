Phần A:
Câu A1:
- Đoạn 1:
Output: underfined
- Đoạn 2:
Output: RẻenceError
- Đoạn 3:
Ouput: TypeError
- Đoạn 4:
Output: [1, 2, 3, 4]
- Đoạn 5:
Output: Trong block: 2
        Ngoài block: 1
Các kết quả “bất ngờ”:
Trường hợp	                            Vì sao bất ngờ
var in undefined	                    Do hoisting
let báo lỗi	                            TDZ — không truy cập trước khai báo
const array vẫn .push() được	        const không khóa nội dung object/array
let trong block không đổi biến ngoài	Vì block scope
Câu A2:
console.log(typeof null);         // "object"
console.log(typeof undefined);    // "undefined"
console.log(typeof NaN);          // "number"
console.log("5" + 3);             // "53"
console.log("5" - 3);             // 2
console.log("5" * "3");           // 15
console.log(true + true);         // 2
console.log([] + []);             // ""
console.log([] + {});             // "[object Object]"
console.log({} + []);             // 0
Vì sao "5" + 3 và "5" - 3 khác nhau?
Toán tử	Hành vi
+	Có thể cộng số HOẶC nối chuỗi (với string → JavaScript ưu tiên nối chuỗi)
-	Chỉ dùng cho toán học
Câu A3:
console.log(5 == "5");              // true
console.log(5 === "5");             // false
console.log(null == undefined);     // true
console.log(null === undefined);    // false
console.log(NaN == NaN);            // false
console.log(0 == false);            // true
console.log(0 === false);           // false
console.log("" == false);           // true
=> Từ giờ nên dùng === vì: 
- Nó kiểm tra:
giá trị
và cả kiểu dữ liệu (type)
Câu A4:
- TẤT CẢ giá trị Falsy trong JavaScript
+ Theo tài liệu:
false
0
""
null
undefined
NaN

if ("0") console.log("A");   //  In "A"
if ("") console.log("B");    //  Không in
if ([]) console.log("C");    //  In "C"
if ({}) console.log("D");    //  In "D"
if (null) console.log("E");  //  Không in
if (0) console.log("F");     //  Không in
if (-1) console.log("G");    //  In "G"
if (" ") console.log("H");   //  In "H"
Câu A5:
// Cách 1
const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2
const url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3
const html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
Phần C:
Câu C1:
- Lỗi 1 thiếu ;
JavaScript có ASI (Automatic Semicolon Insertion) nhưng nên luôn viết ; rõ ràng để tránh bug
Cách sửa: return "Phần trăm giảm không hợp lệ";
- Lỗi 2 dùng var
Vì:
hoisting
function scope
dễ bug
Cách sửa: const giamGia = giaBan * phanTramGiam / 100;
- Lỗi 3 So sánh sai (= thay vì ===)
= là:
assignment
không phải so sánh.
Nó đang:
gán giaSauGiam = 0
=> điều kiện luôn falsy
Cách sửa: if (giaSauGiam === 0)
- Lỗi 4 Input là string "100000"
"100000" là:
string
không phải number.
JavaScript sẽ:
type coercion
=> vẫn tính được nhưng nguy hiểm
Cách sửa: tinhGiaGiamGia(100000, 20)
- Lỗi 5 Không validate kiểu dữ liệu
Function chưa kiểm tra:
typeof
Có thể gây bug:
tinhGiaGiamGia("abc", 20)
=> NaN
Cách sửa:
if (
    typeof giaBan !== "number" ||
    typeof phanTramGiam !== "number" ||
    Number.isNaN(giaBan) ||
    Number.isNaN(phanTramGiam)
) {
    return "Input không hợp lệ";
}
- Lỗi 6 — Dùng var trong vòng lặp + setTimeout
Vì:
var = function scope
setTimeout chạy SAU khi loop kết thúc.
Lúc đó:
i = 5
nên tất cả callback đều dùng cùng 1 biến i
Cách sửa: for (let i = 0; i < 5; i++)
Vì let = block scope
Mỗi vòng lặp có:
1 biến i riêng