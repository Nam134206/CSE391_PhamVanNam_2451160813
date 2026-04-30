# Phần A: Đọc hiểu
Câu A1

1. `type="email"` Trường nhập dạng text nhưng trình duyệt sẽ tự kiểm tra có chứa ký tự @. Thường dùng trong form đăng ký tài khoản
2. `type="password"` Ô nhập liệu dạng text nhưng ký tự được ẩn (hiển thị dấu ●). Không có kiểm tra định dạng mặc định. Dùng cho đăng nhập
3. `type="number"`  Cho phép nhập số, kèm nút tăng giảm và có thể giới hạn bằng min, max. Phù hợp nhập số lượng
4. `type="tel"`  Nhập dạng text, trên mobile sẽ hiển thị bàn phím số. Không tự kiểm tra dữ liệu. Dùng cho số điện thoại
5. `type="date"`  Có giao diện chọn ngày (date picker), đảm bảo giá trị là ngày hợp lệ. Dùng khi chọn ngày giao hàng
6. `type="range"`  Thanh kéo (slider) để chọn giá trị trong khoảng xác định. Hay dùng cho lọc giá
7. `type="checkbox"` Ô vuông cho phép chọn nhiều hoặc bỏ chọn, có thể dùng required để bắt buộc. Thường dùng cho điều khoản
8. `type="radio"` Nút tròn, trong cùng nhóm chỉ chọn được một. Phù hợp chọn phương thức thanh toán
9. `type="file"` Cho phép chọn file từ máy, có thể giới hạn loại file bằng accept. Dùng để upload ảnh
10. `type="search"` Ô nhập tìm kiếm, thường có thêm nút xóa nhanh và icon kính lúp, không có validate riêng
Câu A2

TH1: Không gửi được form vì có required nhưng giá trị đang rỗng (value=""). Trình duyệt yêu cầu phải nhập dữ liệu.
TH2: type="email" yêu cầu đúng định dạng email. Chuỗi "abc" không hợp lệ vì thiếu @ và domain.
TH3: Giá trị nhập vượt quá max="10" (15 > 10) nên bị từ chối.
TH4: Không khớp với pattern yêu cầu 10 chữ số liên tiếp. "abc123" vừa chứa chữ cái vừa không đủ độ dài.
TH5: minlength="8" nhưng chỉ nhập 3 ký tự nên không đạt yêu cầu tối thiểu.
Câu A3

1. Tại sao `<label for="email">` quan trọng cho screen reader?

creen reader giúp người khiếm thị nghe nội dung trang.
Khi focus vào input, nếu không có label, nó chỉ đọc chung chung như “input field”.
Khi có <label>, nó đọc rõ nội dung như “Email”, giúp người dùng hiểu cần nhập gì.

2. Khi nào dùng `<fieldset>` + `<legend>`?

Dùng để gom nhóm các input có liên quan thành một khối.
Thường gặp ở radio/checkbox vì cần tiêu đề chung cho cả nhóm.
- Ví dụ

```html
<fieldset>
  <legend>Phương thức thanh toán</legend>
  <input type="radio" id="cod" name="payment" value="cod" />
  <label for="cod">COD</label>
  <input type="radio" id="card" name="payment" value="card" />
  <label for="card">Thẻ ngân hàng</label>
  <input type="radio" id="momo" name="payment" value="momo" />
  <label for="momo">Ví MoMo</label>
</fieldset>
```

3. `aria-label` dùng khi nào? Tại sao không dùng khi đã có `<label>`?

`aria-label` dùng khi không thể thêm `<label>` vào HTML, ví dụ nút icon không có chữ, ô tìm kiếm trên header không có label hiển thị.
Không nên dùng `aria-label` khi đã có `<label>` vì 2 cái sẽ xung đột, `aria-label` sẽ ghi đè `<label>` khiến screen reader bỏ qua label thật.
`<label>` vừa hỗ trợ screen reader, vừa hiển thị được trên trang, vừa cho phép click vào chữ để focus input → tốt hơn `aria-label` toàn diện hơn.

Câu A4

1. Thuộc tính `loading="lazy"` trên `<img>`

Bình thường ảnh sẽ được tải toàn bộ ngay khi mở trang.
Lazy loading chỉ tải khi ảnh gần xuất hiện trong màn hình.
Lợi ích: giảm thời gian load ban đầu, tiết kiệm dữ liệu

Không nên dùng khi:

Ảnh nằm ở vùng nhìn thấy ngay khi mở trang (above the fold) ví dụ logo, banner hero → lazy sẽ làm ảnh xuất hiện chậm, gây layout shift.
Ảnh quan trọng cần hiển thị ngay như ảnh sản phẩm đầu tiên trong trang chi tiết.

2. Tại sao nên cung cấp nhiều `<source>` trong `<video>`

Các trình duyệt hỗ trợ định dạng video khác nhau.
Trình duyệt sẽ chọn format phù hợp đầu tiên mà nó hỗ trợ.
Nếu chỉ có một định dạng, có thể không phát được trên một số trình duyệt.
  3 format video web phổ biến:
`video/mp4` — hỗ trợ rộng nhất, chạy được trên hầu hết trình duyệt và thiết bị.
`video/webm` — nhẹ hơn mp4, chất lượng tốt, hỗ trợ tốt trên Chrome và Firefox.
`video/ogg` — định dạng mở, hỗ trợ trên Firefox và Chrome, ít phổ biến hơn 2 loại trên.

3. Thuộc tính `alt` trên `<img>`

Hiển thị văn bản thay thế khi ảnh không tải được.
Screen reader đọc `alt` để mô tả ảnh cho người khiếm thị.
Công cụ tìm kiếm dùng `alt` để hiểu nội dung ảnh → tốt cho SEO.
Ảnh sản phẩm iPhone 16 → `alt="iPhone 16 màu đen titan, mặt trước và mặt sau"`
Ảnh trang trí (decorative) → `alt=""` — để rỗng, screen reader sẽ bỏ qua, tránh đọc những thứ không có nghĩa.
Ảnh biểu đồ doanh thu Q1/2026 → `alt="Biểu đồ cột doanh thu Q1/2026, tháng 3 đạt cao nhất với 4.2 tỷ đồng"`

Câu A5

Cách 1 — `<img>`

Ảnh chỉ mang tính minh họa
Không cần chú thích đi kèm
  Ví dụ thực tế:
Avatar người dùng trong header hoặc comment → chỉ cần hiển thị ảnh, không cần caption.

Cách 2 — `<figure>` + `<figcaption>`

Ảnh cần giải thích thêm
Ảnh là một khối nội dung độc lập
  Ví dụ thực tế:
Trang chi tiết sản phẩm → ảnh sản phẩm kèm tên, giá, màu sắc bên dưới.

# Phần C: Phân tích và suy luận
Câu C1

1. Lỗi 1: Dòng 2 — Input "Tên" không có `<label for="...">`, vi phạm accessibility

```html
<label for="name">Tên:</label>
<input type="text" id="name" name="name" required />
```

2. Lỗi 2: Dòng 4 — Input email không có `<label>` và thiếu `name`, `id`, `required`

```html
<!-- Sửa -->
<label for="email">Email:</label>
<input
  type="email"
  id="email"
  name="email"
  placeholder="Email của bạn"
  required
/>
```

3. Lỗi 3: Dòng 6 — Input password không có `<label>` và thiếu `name`, `id`, `required`, `minlength`

```html
<!-- Sửa -->
<label for="password">Mật khẩu:</label>
<input
  type="password"
  id="password"
  name="password"
  placeholder="Mật khẩu"
  minlength="8"
  required
/>
```

4. Lỗi 4: Dòng 7 — Input confirm password không có `<label>` và thiếu `name`, `id`, `required`

```html
<!-- Sửa -->
<label for="confirm-password">Nhập lại mật khẩu:</label>
<input
  type="password"
  id="confirm-password"
  name="confirm-password"
  placeholder="Nhập lại mật khẩu"
  minlength="8"
  required
/>
```

5. Lỗi 5: Dòng 9 — Input phone dùng `type="text"` thay vì `type="tel"`, thiếu `label`, `name`, `id`, `pattern`

```html
<!-- Sửa -->
<label for="phone">Phone:</label>
<input
  type="tel"
  id="phone"
  name="phone"
  pattern="[0-9]{10}"
  value="0901234567"
/>
```

6. Lỗi 6: Dòng 11 — `<select>` thiếu `<label>`, `name`, `id` và thiếu option mặc định placeholder

```html
<!-- Sửa -->
<label for="city">Thành phố:</label>
<select id="city" name="city">
  <option value="">-- Chọn thành phố --</option>
  <option value="hanoi">Hà Nội</option>
  <option value="hcm">TP.HCM</option>
</select>
```

7. Lỗi 7: Dòng 16 — `<label>` không gắn với checkbox nào, thiếu `<input type="checkbox">`

```html
<!-- Sửa -->
<input type="checkbox" id="terms" name="terms" required />
<label for="terms">Tôi đồng ý điều khoản</label>
```

8. Lỗi 8: Dòng 20 — `<form>` thiếu `action` và `method`

```html
<!-- Sửa -->
<form action="#" method="POST"></form>
```

Câu C2

1. Pattern regex cho CMND/CCCD và Số tài khoản

CMND/CCCD đúng 12 chữ số: `pattern="[0-9]{12}"`
Số tài khoản 10-15 chữ số: `pattern="[0-9]{10,15}"`

2. HTML5 validation đủ an toàn cho ứng dụng ngân hàng chưa?

Chưa đủ, hoàn toàn không đủ cho ứng dụng ngân hàng.
HTML5 validation chỉ chạy trên trình duyệt, user có thể tắt JavaScript, dùng DevTools sửa DOM, hoặc gửi request thẳng lên server bằng Post mà bỏ qua toàn bộ validation phía frontend.

3. 3 loại validation HTML5 KHÔNG THỂ làm được

So sánh 2 trường với nhau — ví dụ kiểm tra confirm PIN có khớp PIN không, HTML5 không thể so sánh giá trị giữa 2 input, bắt buộc dùng JavaScript.
Kiểm tra dữ liệu đã tồn tại trong database — ví dụ email đã được đăng ký chưa, số CCCD đã có tài khoản chưa, phải dùng JavaScript gọi API lên server để kiểm tra.
Validate theo logic nghiệp vụ phức tạp — ví dụ kiểm tra số CCCD có hợp lệ theo thuật toán của Bộ Công an không, kiểm tra số tài khoản có thuộc ngân hàng nào không, HTML5 chỉ kiểm tra được định dạng bề ngoài.

4. 2 rủi ro bảo mật nếu chỉ validate Frontend, không validate Backend

Có thể bị bypass bằng công cụ như Postman
Dữ liệu rác và giả mạo tràn vào database — kẻ tấn công có thể tạo hàng nghìn tài khoản với CCCD giả, số tài khoản không tồn tại, hoặc inject mã độc vào các trường dữ liệu gây hỏng hệ thống, rò rỉ dữ liệu khách hàng khác.


