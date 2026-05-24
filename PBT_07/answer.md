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