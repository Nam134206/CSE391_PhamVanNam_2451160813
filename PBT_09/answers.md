Phần A:
Câu A1:
1. Vẽ DOM tree (sơ đồ cây) cho HTML trên
document
└── div#app
    ├── header
    │   ├── h1
    │   │   └── "Todo App"
    │   └── nav
    │       ├── a.active
    │       │   └── "All"
    │       ├── a
    │       │   └── "Active"
    │       └── a
    │           └── "Completed"
    │
    └── main
        ├── form#todoForm
        │   ├── input#todoInput[type="text"]
        │   └── button[type="submit"]
        │       └── "Add"
        │
        └── ul#todoList
            ├── li.todo-item
            │   └── "Learn HTML"
            │
            └── li.todo-item.completed
                └── "Learn CSS"
2. Viết querySelector cho mỗi yêu cầu:
- Chọn thẻ <h1>: const heading = document.querySelector("h1");
- Chọn input trong form: const input = document.querySelector("form input");
- Chọn tất cả .todo-item: const items = document.querySelectorAll(".todo-item");
- Chọn link đang active: const activeLink = document.querySelector("a.active");
- Chọn <li> đầu tiên trong #todoList: const firstItem = document.querySelector("#todoList li");
- Chọn tất cả <a> bên trong <nav>: const links = document.querySelectorAll("nav a");
Câu A2:
- Sự khác nhau:
+ TextContent:
Chỉ lấy / gán text thuần
Không hiểu HTML
An toàn với user input (KHÔNG chạy script)
element.textContent = "<b>Hello</b>";
=> Kết quả hiển thị:
<b>Hello</b> (dạng text, không in đậm)

+ innerHTML:
Lấy / gán HTML + text
Browser sẽ parse HTML
Có thể tạo element thật trong DOM
element.innerHTML = "<b>Hello</b>";
=> Kết quả:
Hello (in đậm thật)

- Khi nào dùng:
+ textContent:
Hiển thị dữ liệu user nhập
Comment, todo text, search result
Không cần HTML
VD:
span.textContent = todo.text;

+ innerHTML:
Render UI từ template string
Render list HTML (todo, card, table)
Dữ liệu đã được kiểm soát (trusted)
VD:
list.innerHTML = todos.map(t => `
  <li>${t.text}</li>
`).join("");

- Vì sao innerHTML gây XSS:
+ Khi user inject JavaScript vào website
+ Browser sẽ:
Parse <img>
Gặp onerror
Chạy JavaScript alert('Hacked!')
=> WEBSITE BỊ CHẠY CODE CỦA USER
VD: const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput;
Câu A3:

- Khi click vào button:
=> Event không dừng ở button
=> Nó (bubble) lên cha → ông → document
Thứ tự DOM:
BUTTON → INNER → OUTER
= Không dùng stopPropagation()
Code:
outer → console.log("OUTER")
inner → console.log("INNER")
button → console.log("BUTTON")
Thứ tự chạy:
BUTTON
INNER
OUTER

- Khi bật e.stopPropagation()
document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("BUTTON");
    e.stopPropagation();
});
 Thứ tự chạy:
BUTTON
Phần C:
Câu C1:

1. Lỗi dùng innerHTML để hiển thị số
countDisplay.innerHTML = count;
=> countDisplay.textContent = count;

2. Lỗi sai event name
document.querySelector("#decrementBtn").addEventListener("onclick", function() {
=> document.querySelector("#decrementBtn").addEventListener("click", function() {

3. Lỗi sai update DOM (gán nhầm biến)
countDisplay = count;
=> countDisplay.textContent = count;
4. Lỗi historyList.innerHTML = null
historyList.innerHTML = null;
=> historyList.innerHTML = "";
5. Lỗi remove không gọi hàm
item.remove;
=> item.remove();
6. Lỗi beforeunload lưu innerHTML dễ sai format + XSS risk
const countDisplay = document.querySelector(".count");
=> const countDisplay = document.querySelector(".count")
7. Lỗi localStorage getItem trả string → không ép kiểu
count = localStorage.getItem("count");
=> count = Number(localStorage.getItem("count"));
8. Lỗi deleteHistory dùng parentNode.removeChild (cũ)
element.parentNode.removeChild(element);
=> element.remove();
Câu C2:
1. Giải thích: Tại sao bind event lên 1000 elements riêng lẻ là BAD PRACTICE? Event Delegation giải quyết thế nào?
- Vấn đề 1: Tốn memory (RAM)
button.addEventListener("click", handler);
=> Nếu có 1000 elements:
1000 event listeners riêng biệt
Mỗi listener = 1 closure + context
=> Memory tăng mạnh
- Vấn đề 2: Chậm khi render + maintain
Khó quản lý (remove/add/update)
Render lại list → mất event → phải gắn lại
- Vấn đề 3: Không scale tốt
1000 → 10.000 elements = crash performanc
- Event Delegation giải quyết thế nào?
KHÔNG gắn event cho từng item
Gắn 1 event cho CHA
2. Refactor dùng DocumentFragment để chỉ gây 1 lần reflow. Giải thích tại sao nhanh hơn.
- Cách hoạt động của DocumentFragment
Là “DOM giả” nằm trong memory (off-screen)
KHÔNG render lên browser khi append từng node
Browser không tính layout khi thêm vào fragment
