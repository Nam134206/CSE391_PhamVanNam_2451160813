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

Phần B
Câu B1