BOOTSTRAP
Phần A:
Câu A1:
Kích thước	            < 768px	                            768px - 991px	                    ≥ 992px
Số cột trên 1 hàng	    1 cột	                            2 cột	                            4 cột
Box layout	            Box 1                       	    Box 1 | Box 2                     Box 1 | Box 2 | Box 3 | Box 4
                        Box 2                               Box 3 | Box 4	    
                        Box 3
                        Box 4
- col-md-6 nghĩa là gì? 
+ Trên màn hình ≥ 768px (md)
+ Element chiếm 6/12 cột
+ Tức là 50% width
- Tại sao không cần viết col-sm-12?
+ Vì Bootstrap là Mobile-First
+ col-12 áp dụng cho tất cả kích thước màn hình mặc định
Nên:
+ Mobile tự động là 100%
+ Không cần thêm: col-sm-12
=> Nó sẽ dư thừa.
Câu A2:
1. Giải thích class d-none d-md-block. Element này hiển thị khi nào, ẩn khi nào?
- d-none → display: none
=> Ẩn element
- d-md-block từ breakpoint md trở lên (≥ 768px) thì: display: block;
2. Liệt kê 5 spacing utilities (margin/padding) và giải thích. VD: mt-3, px-4, mb-auto
1. mt-3
m = margin
t = top
3 = 1rem (16px)
=> Tạo khoảng cách phía trên
2. mb-4
m = margin
b = bottom
4 = 1.5rem
=> Tạo khoảng cách phía dưới
3. mb-auto
m = margin
b = bottom
auto = tự động
=> dùng với flexbox để đẩy phần tử
4. px-4
p = padding
x = left + right
4 = 1.5rem
=> Tạo padding ngang
5. py-2
p = padding
y = top + bottom
2 = 0.5rem
=> Tạo padding dọc
3. Sự khác nhau giữa .container, .container-fluid, .container-md?
- .container:
Có max-width
Tự co giãn theo màn hình
Có khoảng trống 2 bên
- .container-fluid:
Luôn rộng 100%
Chiếm toàn bộ chiều ngang màn hình
- .container-md:
< 768px → full width
≥ 768px → giống .container
=> Breakpoint md trở lên mới có max-width
Phần C:
Câu C1:
1. Bạn muốn đổi màu $primary từ xanh mặc định sang #E63946. Giải thích quy trình (cần công cụ gì, modify file nào).
Quy trình thực hiện
- Bước 1: Cài công cụ
+ Cần:
Bootstrap
Sass
+ Cài bằng npm:
npm install bootstrap sass
- Bước 2: Tạo file custom.scss
- Bước 3: Build SCSS thành CSS
+ Chạy: sass custom.scss style.css
Bước 4: Link file CSS vào HTML
2. Tại sao KHÔNG nên override trực tiếp .btn-primary { background: red; } mà nên dùng SASS variables?
- Vì cách này có nhiều nhược điểm:
1 Chỉ đổi riêng button => web không đồng bộ
2 Khó maintain
+ Sau này đổi brand color: phải sửa nhiều nơi, dễ sót code
+ Trong khi SASS variable: $primary: #E63946; chỉ sửa 1 dòng
3 Dễ phải dùng !important Bootstrap có specificity cao => code khó quản lý
4 Không ảnh hưởng trạng thái hover/focus
- Bootstrap có nhiều trạng thái:
+ hover
+ active
+ focus
+ disabled
- Override CSS thường không cover hết
- SASS variables sẽ generate toàn bộ màu liên quan tự động
5. Mất lợi ích hệ thống theme của Bootstrap
- Bootstrap dùng hệ thống variables để:
+ tạo utilities
+ tạo shades
+ tạo hover colors
+ tạo components đồng bộ
- Override CSS thủ công sẽ phá tính nhất quán đó