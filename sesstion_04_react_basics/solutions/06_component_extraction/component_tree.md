# Component Tree - ShopVN

## Component Tree

App
├── Navbar
│   ├── Logo
│   └── Navigation Links
├── Hero
├── ProductGrid
│   ├── ProductCard
│   ├── ProductCard
│   ├── ProductCard
│   └── ProductCard
└── Footer

---

## Props của từng Component

### Navbar

Props:

* logo: string
* links: array

### Hero

Props:

* title: string
* subtitle: string
* buttonText: string

### ProductGrid

Props:

* title: string
* products: array

### ProductCard

Props:

* image: string
* name: string
* price: string

### Footer

Props:

* text: string

---

## Lý do tách Component

### Navbar

* Dùng lại ở nhiều trang.
* Dễ thay đổi menu.

### Hero

* Dễ thay đổi nội dung.
* Có thể tái sử dụng cho nhiều landing page.

### ProductCard

* Tránh lặp code.
* Chỉ cần sửa một nơi khi thay đổi giao diện sản phẩm.

### ProductGrid

* Tách phần layout khỏi ProductCard.
* Quản lý việc render danh sách sản phẩm.

### Footer

* Dùng chung cho toàn website.
* Dễ bảo trì.
