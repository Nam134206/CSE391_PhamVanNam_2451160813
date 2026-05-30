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
