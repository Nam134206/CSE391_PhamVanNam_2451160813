Phần A:
Câu A1:
1. Viết chính xác thẻ <meta viewport> chuẩn. Giải thích từng thuộc tính.
+ Thẻ <meta viewport> chuẩn: <meta name="viewport" content="width=device-width, initial-scale=1.0">
+ Giải thích:
width=device-width
    Chiều rộng trang web sẽ bằng đúng chiều rộng màn hình thiết bị
initial-scale=1.0
    Mức zoom ban đầu là 100% (không phóng to hay thu nhỏ)
=> Đây là “tấm vé vào cửa” cho responsive web và phải đặt trong <head>
2. Nếu THIẾU thẻ này, iPhone sẽ hiển thị trang web như thế nào?
+ iPhone sẽ coi trang web là web desktop và tự thu nhỏ toàn bộ trang lại
+ Chữ rất nhỏ, nút bấm khó nhấn, phải zoom in để đọc, có thể phải scroll ngang liên tục
3. Mobile-First và Desktop-First khác nhau thế nào? Viết ví dụ CSS cho mỗi cách với breakpoint 768px. Tại sao Mobile-First được khuyên dùng?
- Khác nhau:
+ Mobile-First:   Viết CSS cho mobile trước (mặc định)
            Sau đó dùng min-width để mở rộng cho tablet và desktop
VD: 
.col {
    width: 100%;
}
@media (min-width: 768px) {
    .col {
        width: 50%;
    }
}
+ Desktop-First:    Viết CSS cho desktop trước
                    Sau đó dùng max-width để thu nhỏ cho mobile
VD:
.col {
    width: 50%;
}
@media (max-width: 768px) {
    .col {
        width: 100%;
    }
}
- Mobile-First được khuyên dùng vì: 
+ Điện thoại tải ít CSS hơn → nhanh hơn
+ Desktop chỉ cần thêm CSS khi màn hình lớn
+ Dễ thiết kế responsive hơn
+ Hiện nay đa số người dùng truy cập bằng mobile
Câu A2: 
Breakpoints chuẩn (Bootstrap):
Tên	Kích thước	Thiết bị            lưới sản phẩm nên hiển thị mấy cột 
xs	< 576px	    Điện thoại dọc      1 cột
sm	≥ 576px	    Điện thoại ngang    1-2 cột
md	≥ 768px	    Tablet              2 cột
lg	≥ 992px	    Desktop nhỏ         3 cột
xl	≥ 1200px	Desktop lớn         4 cột
Câu A3:
Chiều rộng màn hình	        .container width
375px (iPhone SE)	        width: 100%
600px	                    width: 540px
800px	                    width: 720px
1000px                      width: 960px
1400px	                    width: 1140px
Câu A4:
1. Variables ($primary-color)
- Giải thích: Dùng biến để lưu giá trị → đổi 1 chỗ, đổi toàn bộ project
- Ví dụ:
$primary-color: #805ad5;
$danger: #e53e3e;

.btn-primary {
    background: $primary-color;
}

.header {
    color: $primary-color;
}
- Ý nghĩa:
Tránh phải sửa 47 chỗ khi đổi màu 
2. Nesting (viết CSS lồng nhau)
- Giải thích: Viết CSS giống cấu trúc HTML → dễ đọc hơn
- Ví dụ:
.navbar {
    background: #1a202c;

    ul {
        list-style: none;

        li {
            margin-right: 20px;

            a {
                color: white;

                &:hover {
                    color: $primary-color;
                }
            }
        }
    }
}
- Ý nghĩa:
+ & là selector cha
+ Không cần viết .navbar ul li a dài dòng
3. Mixins (@mixin, @include)
- Giải thích: Giống “hàm CSS” → tái sử dụng code
- Ví dụ:
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    @include flex-center;
    height: 200px;
}
Có tham số:
@mixin button($bg) {
    background: $bg;
    color: white;
}

.btn-primary {
    @include button(#805ad5);
}
4. @extend / Inheritance
- Giải thích: Kế thừa style từ class khác
- Ví dụ:
.btn {
    padding: 10px 20px;
    border-radius: 8px;
}

.btn-primary {
    @extend .btn;
    background: #805ad5;
}

.btn-danger {
    @extend .btn;
    background: #e53e3e;
}
- Ý nghĩa:
Không lặp lại code
Dùng chung style base
Phần C:
Câu C1:
1. Navigation thay đổi thế nào?
- Mobile (375px)
+ Logo nhỏ hơn
+ Search bar thu gọn
- Tablet (768px)
Search bar dài hơn mobile
Một số icon (giỏ hàng, thông báo) hiển thị to hơn
- Desktop (1440px)
Logo + search bar lớn ở giữa
2. Lưới content thay đổi mấy cột?
- Mobile (375px)
Đầy đủ các cột
- Tablet (768px)
4 cột
- Desktop (1440px)
2 cột nhưng lớn
3. Elements nào bị ẩn trên mobile?
Không Elements nào bị ẩn
4. Font size có thay đổi không?
Có.
- Mobile
Font nhỏ hơn để vừa màn hình
- Desktop
Font lớn hơn, dễ đọc hơn
Câu C2:
 MOBILE (375px)
- Những gì bị ẩn:
Menu navigation (nếu có) → chuyển thành hamburger
Sidebar (nếu có thiết kế phụ)
Banner phụ / quảng cáo lớn
Một số thành phần trang trí không quan trọng
- Form nằm đâu?
 Form đặt bàn nằm:
Ngay dưới Hero image
Ưu tiên hiển thị sớm để người dùng đặt bàn nhanh
 Grid ảnh:
1 cột
grid-template-columns: 1fr;
TABLET (768px)
-Grid ảnh:
2 cột
grid-template-columns: repeat(2, 1fr);
- Bản đồ nằm đâu?
Vẫn ở cuối trang
Full width (không chia cột)
Có thể cao hơn mobile một chút
- Layout tổng:
Form có thể chia 2 cột bên trong
Content bắt đầu “thoáng” hơn mobile
- DESKTOP (1440px)
 Layout bao nhiêu cột?
1 cột sidebar (form hoặc menu)
2 cột content chính
Grid ảnh:
3–4 cột
grid-template-columns: repeat(3, 1fr);
hoặc
repeat(4, 1fr);
Phần B:
Câu B3:
 Lệnh Conpile: sass PBT_05\scss\style.scss PBT_05\scss\style.css