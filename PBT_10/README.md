# Weather App

## Mô tả

Ứng dụng tra cứu thời tiết theo tên thành phố.

Người dùng nhập tên thành phố và hệ thống gọi API để lấy:

* Nhiệt độ
* Độ ẩm
* Mô tả thời tiết
* Icon thời tiết

Ngoài ra ứng dụng lưu 5 thành phố tìm kiếm gần nhất bằng LocalStorage.

---

## API sử dụng

### wttr.in

https://wttr.in/Hanoi?format=j1

Dữ liệu:

* current_condition
* temp_C
* humidity
* weatherDesc
* weatherIconUrl

---

## Chức năng

* Search thành phố
* Fetch API bằng async/await
* Loading State
* Success State
* Error State
* Search History
* LocalStorage

---

## Công nghệ

* HTML5
* CSS3
* JavaScript ES6+
* Fetch API
* LocalStorage

---

## Cấu trúc thư mục

weather_app/

├── index.html

├── style.css

├── app.js

└── README.md

---

## Cách chạy

Mở bằng Live Server:

1. Open Folder bằng VS Code
2. Chuột phải index.html
3. Open with Live Server

---

## Kiến thức áp dụng

* Async/Await
* Fetch API
* Error Handling
* LocalStorage
* Loading / Success / Error States
# User Directory CRUD

## Mô tả

Ứng dụng quản lý người dùng sử dụng JSONPlaceholder API.

Cho phép:

* Xem danh sách users
* Thêm user
* Sửa user
* Xóa user
* Tìm kiếm user

---

## API sử dụng

JSONPlaceholder

https://jsonplaceholder.typicode.com/users

Methods:

GET /users

GET /users/:id

POST /users

PUT /users/:id

DELETE /users/:id

---

## Chức năng

* CRUD Users
* Search theo tên hoặc email
* Skeleton Loading
* Toast Success/Error
* UI Layer tách riêng
* API Layer tách riêng

---

## Công nghệ

* HTML5
* CSS3
* JavaScript ES6+
* Fetch API

---

## Cấu trúc thư mục

user_directory/

├── index.html

├── style.css

├── app.js

└── README.md

---

## Cách chạy

Live Server:

Open with Live Server

hoặc

python -m http.server 5500

---

## Kiến thức áp dụng

* Fetch CRUD
* Async/Await
* Form Handling
* Search Filter
* API Service Layer

# Infinite Gallery App

## Mô tả

Ứng dụng gallery ảnh với Infinite Scroll.

Ảnh sẽ tự động tải thêm khi người dùng kéo gần cuối trang.

---

## API sử dụng

Picsum Photos

https://picsum.photos/v2/list?page=1&limit=20

hoặc

JSONPlaceholder Photos

https://jsonplaceholder.typicode.com/photos

---

## Chức năng

* Load 20 ảnh ban đầu
* Infinite Scroll
* Lazy Loading Images
* Responsive Grid
* Lightbox Modal
* Loading Indicator

---

## Công nghệ

* HTML5
* CSS3
* JavaScript ES6+
* Fetch API
* IntersectionObserver

---

## Cấu trúc thư mục

gallery_app/

├── index.html

├── style.css

├── app.js

└── README.md

---

## Cách chạy

Open with Live Server

---

## Kiến thức áp dụng

* Async/Await
* Fetch API
* Infinite Scroll
* Lazy Loading
* IntersectionObserver
# API Dashboard

## Mô tả

Dashboard tổng hợp dữ liệu từ nhiều API khác nhau.

Mỗi API hiển thị trong một widget riêng.

Một widget lỗi không ảnh hưởng widget khác.

---

## APIs sử dụng

### Random User

https://randomuser.me/api/

### Open-Meteo

https://api.open-meteo.com/v1/forecast?latitude=21.03&longitude=105.85&current_weather=true

### REST Countries

https://restcountries.com/v3.1/name/vietnam

---

## Chức năng

* Promise.allSettled()
* Refresh All
* Widget riêng biệt
* Loading State
* Success State
* Error State
* Hiển thị thời gian fetch

---

## Công nghệ

* HTML5
* CSS3
* JavaScript ES6+
* Fetch API
* Promise.allSettled

---

## Cấu trúc thư mục

dashboard/

├── index.html

├── style.css

├── app.js

└── README.md

---

## Cách chạy

Open with Live Server

hoặc

python -m http.server 5500

---

## Kiến thức áp dụng

* Promise.all
* Promise.allSettled
* Parallel Requests
* Async/Await
* Error Handling
* Dashboard UI Design
