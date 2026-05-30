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

