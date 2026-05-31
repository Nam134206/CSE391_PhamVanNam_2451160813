Bài 01:
Câu hỏi
File .jsx khác gì file .js?
Tại sao phải export default App?
Thử xóa export default → chuyện gì xảy ra?

1. 
js: JavaScript thông thường
.jsx: JavaScript + JSX (cú pháp giống HTML)
2. 
Vì file khác cần import component App.

Ví dụ trong main.jsx:

import App from "./App";

Nếu không export thì React không lấy được component.
3. 
Sẽ báo lỗi:

The requested module '/src/App.jsx' does not provide an export named 'default'

hoặc

Failed to resolve import App

Trang web trắng hoặc không render được.
