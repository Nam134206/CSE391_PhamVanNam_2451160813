Phần A:
Câu A1:
- Đoạn 1:
Output: underfined
- Đoạn 2:
Output: RẻenceError
- Đoạn 3:
Ouput: TypeError
- Đoạn 4:
Output: [1, 2, 3, 4]
- Đoạn 5:
Output: Trong block: 2
        Ngoài block: 1
Các kết quả “bất ngờ”:
Trường hợp	                            Vì sao bất ngờ
var in undefined	                    Do hoisting
let báo lỗi	                            TDZ — không truy cập trước khai báo
const array vẫn .push() được	        const không khóa nội dung object/array
let trong block không đổi biến ngoài	Vì block scope