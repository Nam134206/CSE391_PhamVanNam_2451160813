# Reflection — DOM Thuần vs JSX

## Câu 1

Ở phần A (Vanilla JS), mỗi lần thêm, sửa hoặc xóa Todo tôi phải:

* Cập nhật dữ liệu trong mảng todos
* Gọi renderTodos()
* renderTodos() phải:

  * Lấy phần tử DOM bằng getElementById()
  * Tạo lại HTML bằng map()
  * Gán lại innerHTML

Như vậy mỗi thao tác đều phải tự quản lý việc cập nhật giao diện.

---

## Câu 2

Ở phần B (React), khi setTodos() chạy:

* React cập nhật state
* React tự động re-render component
* React so sánh Virtual DOM với DOM hiện tại
* React chỉ cập nhật những phần thay đổi trên giao diện

Tôi không cần gọi hàm render thủ công.

---

## Câu 3

Nếu Portfolio có 50 project thì React quản lý an toàn hơn vì:

* Dữ liệu tập trung trong state
* Không phải thao tác trực tiếp với DOM
* Giảm lỗi khi cập nhật giao diện
* Dễ thêm tính năng tìm kiếm, lọc, sắp xếp
* Code ngắn gọn và dễ bảo trì hơn

---

## Câu 4

Nếu thay TodoItem bằng ProjectCard thì:

* useState dùng để lưu danh sách project
* map() dùng để hiển thị các ProjectCard
* filter() dùng để lọc theo category hoặc xóa project
* setProjects() dùng để cập nhật dữ liệu

Ví dụ:

setProjects(
projects.filter(project => project.category === "React")
);

hoặc

setProjects(
projects.filter(project => project.id !== id)
);

Pattern state → render của Todo List có thể áp dụng trực tiếp cho Portfolio.
