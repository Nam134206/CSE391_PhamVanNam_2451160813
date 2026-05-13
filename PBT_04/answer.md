Phần A:
Câu A1:
Position	Vẫn chiếm chỗ trong flow?	    Tham chiếu vị trí	              Cuộn theo trang?	Use case
static	    có	                            Không dùng top,left, bottom	      có                Mặc định
relative	có                              Chính vị trí ban đầu	          có                Dịch nhẹ, làm mốc cho absolute
absolute	không	                        Cha relative gần nhất	          không             Badge, dropdown, tooltip
fixed	    không	                        viewport	                      không             Chat button, modal overlay
sticky	    có	                            viewport(khi dính)	              có                Sticky header, sidebar
- Khi nào absolute tham chiếu body?
+ Không có bất kỳ tổ tiên nào (parent, grandparent, …) có position khác static
+ Tức là không có "positioned ancestor"
- Khi nào tham chiếu parent? 
+ Khi có một phần tử cha gần nhất. Khi đó nó sẽ lấy phần tử đó làm mốc
- Giải thích khái niệm "nearest positioned ancestor": 
+ Positioned element = element có position khác static
+ Nearest positioned ancestor = tổ tiên gần nhất (cha → ông → cụ...) có position ≠ static
Câu A2:
- Trường hợp 1:
Có 4 items
flex: 1 → mỗi item chiếm 1 phần bằng nhau
Mặc định flex-direction: row
=> bố cục = hàng và mỗi item chiếm 1 phần
- Trường hợp 2:
flex-wrap: wrap → cho phép xuống dòng
Mỗi item chiếm:
45% width
2.5% margin trái
2.5% margin phải
→ Tổng ≈ 50%
=> Mỗi hàng chỉ chứa được 2 item
Có 6item => 6/2 = 3 hàng và 2 cột
- Trường hợp 3:
space-between:
    Item đầu sát trái
    Item cuối sát phải
    Item giữa chia đều khoảng trống
align-items: center:
    Căn giữa theo chiều dọc
=> Bố cục = 3 item nằm hàng ngang 
- Trường hợp 4:
3 cột:
    Cột 1: 200px
    Cột 2: chiếm phần còn lại (1fr)
    Cột 3: 200px
gap: 20px → khoảng cách giữa các ô
=> Bố cục thành 1 hàng
- Trường hợp 5:
3 cột bằng nhau
Có 7 items
Grid sẽ đi theo thứ tự từ trái sang phải, rồi xuống dòng.
7 items
Mỗi hàng 3 item
=> Bố cục = 7 / 3 = 2 hàng đầy + 1 item lẻ

Phần C:
Câu C1:
1. Navigation bar ngang (logo + menu + buttons):
- Dùng: Flexbox
- Vì:
    Navbar là layout 1 chiều (hàng ngang). Flexbox tối ưu cho việc:
    Căn trái – giữa – phải (justify-content)
    Căn giữa theo chiều dọc (align-items)
    Chia không gian linh hoạt
Grid không cần thiết cho bài này.
2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
- Dùng: Grid
- Vì:
    Đây là layout 2 chiều (hàng + cột)
    Cần số cột cố định (3 cột)
    Số lượng ảnh thay đổi → Grid tự xuống dòng rất gọn
Flexbox vẫn làm được, nhưng Grid phù hợp hơn cho dạng “lưới”.
3. Layout blog: main content + sidebar
- Dùng: Grid
- Vì:
    Đây là layout 2 vùng rõ ràng
    Cần chia cột theo tỷ lệ (ví dụ: 200px + 1fr)
    Grid rất mạnh trong layout tổng thể trang
Flex có thể làm, nhưng Grid sạch và rõ ràng hơn
4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)
- Dùng: Grid
- Vì
    Đây là bố cục nhiều cột cố định
    Ví dụ: repeat(4, 1fr)
    Grid xử lý layout nhiều cột tốt hơn Flex
Flex cũng làm được, nhưng Grid dễ kiểm soát cột đều nhau hơn
5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)
- Kết hợp Flexbox + (Grid hoặc không cần Grid)
- Card dùng Flexbox
- flex-direction: column
- Nút dùng margin-top: auto để dính đáy
Vì sao dùng Flex"
+ Vì đây là layout 1 chiều theo chiều dọc, và cần đẩy nút xuống cuối.
Grid không bắt buộc ở đây

Câu C2:
- Lỗi 1: 
+ Nguyên nhân: .card-container { display: flex; flex-wrap: wrap; }
+ Nhưng :   .card chưa được thiết kế theo flex column
            Nội dung mỗi card dài ngắn khác nhau
            Nút không được đẩy xuống đáy
=> Vì vậy chiều cao card khác nhau → nút bị lệch
+ Cách sửa:  
.card {
  width: 30%;
  margin: 1.5%;

  display: flex;
  flex-direction: column;
}
.card .btn {
  margin-top: auto;
}
- Lỗi 2: 
+ Nguyên nhân: 
.hero {
    height: 100vh;
    display: flex;
}
=> thiếu jusstify-content vs align-items
+ cách sửa:
.hero {
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
}
- Lỗi 3:
+ Nguyên nhân: lex mặc định cho phép phần tử co lại (flex-shrink: 1). Khi .content dài → nó ép .sidebar nhỏ lại
+ cách sửa: 
.sidebar {
  width: 250px;
  flex-shrink: 0;
}