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