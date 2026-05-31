Phần A:
Câu A1:
- Thứ tự output
1 - Start
4 - End
3 - Promise
6 - Promise 2
2 - Timeout 0ms
7 - Nested timeout
5 - Timeout 100ms
- Giải thích theo Event Loop
JavaScript là single-threaded, chỉ làm 1 việc tại 1 thời điểm. Khi gặp tác vụ bất đồng bộ (Promise, setTimeout, fetch...), JS không chờ mà giao cho môi trường chạy, sau đó Event Loop sẽ đưa callback quay lại để thực thi
Thứ tự xử lý:

Synchronous Code
      ↓
Microtask Queue
      ↓
Macrotask Queue
- Giải thích Microtask Queue:
Microtask Queue chứa các callback của:

Promise.then()
Promise.catch()
Promise.finally()

Trong đoạn code:

Promise.resolve().then(() => console.log("3 - Promise"));

Promise.resolve().then(() => {
    console.log("6 - Promise 2");
});

⇒ Microtask Queue:

3 - Promise
6 - Promise 2

Microtask được ưu tiên chạy trước Macrotask.
- Giải thích Macrotask Queue:
Macrotask Queue chứa các callback của:

setTimeout()
setInterval()

Trong đoạn code:

setTimeout(() => console.log("2 - Timeout 0ms"), 0);
setTimeout(() => console.log("5 - Timeout 100ms"), 100);

Khi chạy 6 - Promise 2:

setTimeout(() => console.log("7 - Nested timeout"), 0);

⇒ Macrotask Queue lần lượt là:

2 - Timeout 0ms
7 - Nested timeout

5 - Timeout 100ms phải đợi đủ 100ms mới được đưa vào queue.
Câu A2:
1. await fetch(...) — fetch trả về gì? Tại sao cần await?
fetch() trả về Promise
Promise đó sẽ resolve thành một Response object
Cần await để chờ Promise hoàn thành và lấy Response
2. response.ok — Khi nào false? Liệt kê 3 status codes tương ứng.
fetch() không tự throw với HTTP 4xx/5xx, phải tự kiểm tra response.ok.

response.ok = true khi status từ 200–299
response.ok = false khi status ngoài khoảng đó

Ví dụ:

404 Not Found     → response.ok = false
500 Server Error  → response.ok = false
403 Forbidden     → response.ok = false
3. response.json() — Tại sao cần await lần nữa?
response.json() cũng trả về Promise
Browser cần thời gian để parse JSON thành object JavaScript
Vì vậy phải dùng await lần nữa
4. try...catch — Catch những lỗi gì? (Network error? 404? JSON parse error?)
- Network Error
- Lỗi tự throw
- JSON parse error
Câu A3:
1. Sơ đồ 3 trạng thái của Promise
          Pending
     (Đang xử lý)
          │
     ┌────┴────┐
     │         │
     ▼         ▼
 Fulfilled   Rejected
(Thành công) (Thất bại)
2. Callback Hell là gì?
Callback Hell là tình trạng nhiều callback lồng nhau quá sâu làm code khó đọc, khó bảo trì và khó xử lý lỗi
3. Viết ví dụ 4 cấp callback hell → Refactor thành async/await.
getUser(function(user) {
    getOrders(user.id, function(orders) {
        getProduct(orders[0].productId, function(product) {
            getReview(product.id, function(reviews) {
                console.log(reviews);
            });
        });
    });
});
-  Refactor thành async/await.
async function loadReviews() {
    try {
        const user = await getUser();
        const orders = await getOrders(user.id);
        const product = await getProduct(orders[0].productId);
        const reviews = await getReview(product.id);

        console.log(reviews);
    } catch (error) {
        console.error(error);
    }
}
Phần C:
Câu C1:
1. Network errors (mất mạng giữa chừng) → Xử lý thế nào?
try {
    const response = await fetch("/api/products");
    const data = await response.json();
} catch (error) {
    showError("Không có kết nối mạng. Vui lòng thử lại!");
    console.error(error);
}
2. API errors (server trả 500, 404, 429 Too Many Requests) → Xử lý từng loại
404 Not Found
if (response.status === 404) {
    throw new Error("Sản phẩm không tồn tại");
}
Giải thích: URL hoặc dữ liệu không tồn tại.
500 Internal Server Error
if (response.status === 500) {
    throw new Error("Lỗi server, vui lòng thử lại sau");
}
Giải thích: Lỗi phía server.
429 Too Many Requests
if (response.status === 429) {
    throw new Error("Quá nhiều yêu cầu, vui lòng chờ");
}
Giải thích: Người dùng gửi quá nhiều request trong thời gian ngắn.
Pattern chung
if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
}
3. Timeout (API chậm > 10 giây) → Viết code fetchWithTimeout(url, ms)
Code fetchWithTimeout
async function fetchWithTimeout(url, ms = 10000) {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Request Timeout")), ms)
        )
    ]);
}
Sử dụng
try {
    const response = await fetchWithTimeout("/api/products", 10000);
    const data = await response.json();
} catch (error) {
    console.error(error.message);
}
4. Retry logic (thử lại 3 lần nếu lỗi network) → Viết code fetchWithRetry(url, maxRetries)
async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 1; i <= maxRetries; i++) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            return response;
        } catch (error) {
            console.log(`Retry ${i}/${maxRetries}`);

            if (i === maxRetries) {
                throw error;
            }
        }
    }
}