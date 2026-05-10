Phần A:

Câu A1:
1. Inline CSS:
-VD: <h1 style="color: orange; font-size: 26px;">Tiêu đề</h1>
-Ưu điểm:
+ Viết nhanh 
+ Không cần tạo file CSS riêng
+ debug nhanh

-Nhược điểm:
+ Không hiệu quả khi dự án lớn
+ Không tái sử dụng được
+ Làm HTML rối

-Khi nào sử dụng:
+ thử nghiệm nhanh
+ sửa tạm thời
+ Chỉnh lỗi nhanh cho 1 element

2. Internal CSS:
-VD: <head>
        <style>
            h1 { color: red; font-size: 24px; }
        </style>
    </head>

-Ưu điểm:
+ Gọn trong 1 file HTML không cần tạo file ngoài
+ Phù hợp khi làm bản thử nghiệm

-Nhược điểm:
+ Không tái sử dụng được cho nhiều trang
+ Khó quản lý khi dự án lớn

-Khi nào sử dụng:
+ Trang web nhỏ,Demo nhanh, bản thử nghiệm
+ Bài tập

3. External CSS:
-VD: <head>
        <link rel="stylesheet" href="styles.css">
     </head>
    
-Ưu điểm:
+ Tách biệt HTML và CSS
+ Dễ bảo trì
+ Tái sử dụng nhiều trang
+ Chuẩn dự án thực tế

-Nhược điểm: 
+ Cần tạo thêm file nên phải quản lý nhiều file hơn

-Khi nào cần sử dụng: 
+ Dự án thật, Website nhiều trang
+ Làm việc nhóm

Câu A2:
1. h1                           → Chọn: ShopTLU
2. .price                       → Chọn: 25.990.000đ và 45.990.000đ
3. #app header                  → Chọn: Chọn toàn bộ header
4. nav a:first-child             → Chọn: Home
5. .product.featured h2         → Chọn: MacBook Pro
6. article > p                  → Chọn: 25.990.000đ, Mô tả sản phẩm...,  
45.990.000đ, Mô tả sản phẩm...
7. a[href="/"]                  → Chọn: Home
8. .top-bar.dark h1              → Chọn: ShopTLU

Câu A3:
/* Trường hợp 1: content-box (mặc định) */
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 400 + 20x2 + 5x2 = 450px
→ Không gian chiếm trên trang = 450 + 20 = 470px

/* Trường hợp 2: border-box */
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 400px
→ Kích thước content thực tế = 400 − 40 − 10 = 350px
→ Không gian chiếm trên trang = 400 + 20 = 420px

/* Trường hợp 3: Margin collapse */
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
→ Khoảng cách giữa box-a và box-b = 40
→ Giải thích tại sao KHÔNG PHẢI 65px
Vì theo quy tắc Margin Collapse:
+ Margin trên và dưới khi chồng dọc
+ Không cộng
+ Chỉ lấy giá trị lớn hơn

-Nâng cao
+ Khi có margin âm → tính toán sẽ là: 40 + (-10) = 30px

Câu A4:
1.
+ Rule A	p	            (0,0,1)
+ Rule B	.price	        (0,1,0)
+ Rule C	#main-price	    (1,0,0)
+ Rule D	p.price	        (0,1,1)
2.
+ Element sẽ có màu đỏ vì Rule C có độ ưu tiên cao nhất
3.
+ Element sẽ có màu cam
4. 
+ Nếu Rule A thêm !important element sẽ có màu đen Vì lúc này Rule A sẽ có độ ưu tiên cao nhất (1,0,0,0) 

Phần B
Câu B1:
Trong file có:
+ Element selector → body, header, table
+ Class selector → .active
+ Universal selector → *
+ Descendant selector → nav a
+ Pseudo-class → :hover, :nth-child(even)
Câu B2:
Phần 1 — content-box vs border-box
+ Hộp 1 (content-box): chiều rộng thực tế = 350px (đo từ DevTools)
+ Hộp 2 (border-box): chiều rộng thực tế = 300px (đo từ DevTools)
-Giải thích sự khác biệt:

+ Hộp 1 dùng content-box (mặc định): width: 300px chỉ tính phần content. Padding và border được cộng thêm ra ngoài → chiều rộng thực tế = 300 + 20×2 + 5×2 = 350px.
+ Hộp 2 dùng border-box: width: 300px là tổng kích thước bao gồm cả padding và border. Chúng co vào trong → chiều rộng thực tế luôn đúng 300px.

Phần 2 — Layout 3 cột
-Trường hợp KHÔNG dùng border-box (content-box):
+ Cột trái: 250 + 15×2 = 280px
+ Cột giữa: 500 + 20×2 = 540px
+ Cột phải: 250 + 15×2 = 280px
+ Tổng = 280 + 540 + 280 = 1100px → vượt quá container 1000px → layout vỡ
-Trường hợp CÓ dùng border-box:
+ Cột trái: đúng 250px
+ Cột giữa: đúng 500px
+ Cột phải: đúng 250px
+ Tổng = 250 + 500 + 250 = 1000px → vừa khít container → layout đúng
Câu B3
P1 10 CSS Rules và Specificity
1. p { color: gray; } → Specificity: (0,0,1)
2. html p { color: sienna; } → (0,0,2)
3. .text { color: blue; } → (0,1,0)
4. p.text { color: green; } → (0,1,1)
5. .text.highlight { color: orange; } → (0,2,0)
6. p.text.highlight { color: purple; } → (0,2,1)
7. #demo { color: crimson; } → (1,0,0)
8. p#demo { color: deeppink; } → (1,0,1)
9. #demo.text { color: darkorange; } → (1,1,0)
10. p#demo.text.highlight { color: red; } → (1,2,1) → cao nhất

P2 Element cuối cùng hiển thị màu gì? Tại sao?
- Màu hiển thị: red
- Lý do:
+ Rule số 10 có độ ưu tiên (specificity) lớn nhất nên nó được áp dụng
- Khi tính specificity theo nguyên tắc 3 phần:
+ Cột 1: ID selector (#)
+ Cột 2: Class / attribute / pseudo-class
+ Cột 3: Element (tag)
- Phân tích rule 10:
+ Có 1 ID → #demo → (1,0,0)
+ Có 2 class → .text và .highlight → (0,2,0)
+ Có 1 tag → p → (0,0,1)
=> Tổng hợp lại → (1,2,1)
- So với các rule khác:
+ Các rule từ 1–6 không có ID nên luôn thua vì ID có mức ưu tiên cao hơn
+ Các rule 7–9 có 1 ID nhưng số lượng class thấp hơn rule 10
- Vì vậy rule 10 đứng đầu và được trình duyệt áp dụng
P3 Thay đổi thứ tự rules trong CSS — Kết quả có đổi không?
- Không thay đổi
- Vì:
+ Khi các selector có specificity khác nhau, rule có độ ưu tiên cao hơn sẽ luôn thắng, bất kể viết trước hay sau.
+ Thứ tự trong file chỉ ảnh hưởng khi specificity bằng nhau.
+ Khi bằng nhau, rule viết sau cùng sẽ được áp dụng (do cơ chế cascade).

Phần C
Câu C1:
1. Chiều rộng thức thế:
+   Side bar:
    padding = 20 × 2 = 40px
    border = 1 × 2 = 2px
    300+40+2=342px
    Sidebar = 342px
+ Content:
    padding = 30 × 2 = 60px
    border = 1 × 2 = 2px
    660+60+2=722px
    content = 722px
=> Tổng chiều rộng thực tế: 342+722=1064px
2. Vì container chỉ rộng 960px mà tổng hai cột lại vượt quá 104px do đó hai cột không còn đủ chỗ, cột thứ hai đẩy xuống dòng mới, layout bị vỡ
3.
- Cách 1: Dùng border-box
Thêm box-sizing: border-box vào cả sidebar và content. Padding và border sẽ co vào trong, width giữ đúng như đặt → tổng = 300 + 660 = 960px, vừa khít container.
.sidebar {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  float: left;
}
.content {
  box-sizing: border-box;
  width: 660px;
  padding: 30px;
  border: 1px solid #ccc;
  float: left;
}
- Cách 2: Tự trừ padding + border khỏi width (không dùng border-box)
Tính ngược lại width cần khai báo để chiều rộng thực tế vừa khít 960px.

Sidebar muốn chiều rộng thực tế = 300px → width khai báo = 300 - 20×2 - 1×2 = 258px
Content muốn chiều rộng thực tế = 660px → width khai báo = 660 - 30×2 - 1×2 = 598px
Kiểm tra: (258 + 40 + 2) + (598 + 60 + 2) = 300 + 660 = 960px ✓
.sidebar {
  width: 258px;
  padding: 20px;
  border: 1px solid #ccc;
  float: left;
}

.content {
  width: 598px;
  padding: 30px;
  border: 1px solid #ccc;
  float: left;
}

Câu C2
1. "Sản phẩm A" h2 có font-size = 20px và color = green
GT: 
+ Không có rule nào khác set font-size cho h2 .card .title → áp dụng →font-size: 20px. Không bị ghi đè.
+ #featured .title → color: red (specificity cao) .highlight → color: green !important. Vì có !important, nên nó vượt qua mọi specificity bình thường.
2. "Mô tả sản phẩm" (p trong card featured) có color = blue
GT:
card đặt color: blue
p bên trong .card
.card p { color: inherit; }
inherit nghĩa là:
Lấy màu từ cha
Cha là .card → màu blue.
=> color = blue
3. "Sản phẩm B" — h2.title trong .card thứ 2 (không có id)
.card .title áp dụng
Không có rule khác ghi đè
=> font-size = 20px
- Color
.card → color: blue
h2 không có rule color riêng
Không có .highlight
Không nằm trong #featured
=>Kế thừa từ .card
=> color = blue
4. "Mô tả sản phẩm B" — p.highlight trong .card thứ 2
!important thắng tất cả.
Không có rule nào vượt qua.
=> color = green