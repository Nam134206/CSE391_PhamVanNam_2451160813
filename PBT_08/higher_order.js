// 1. pipe() — Nối chuỗi functions
function pipe(...fns) {
    return (value) =>
        fns.reduce((result, fn) => fn(result), value);
}

const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x
);

console.log(process(5));
// → "Kết quả: 20"


// =======================================
// 2. memoize() — Cache kết quả
function memoize(fn) {
    const cache = {};

    return (...args) => {
        const key = JSON.stringify(args);

        if (cache[key]) {
            console.log("Lấy từ cache...");
            return cache[key];
        }

        const result = fn(...args);

        cache[key] = result;

        return result;
    };
}

const expensiveCalc = memoize((n) => {
    console.log("Đang tính...");

    let result = 0;

    for (let i = 0; i < n; i++) {
        result += i;
    }

    return result;
});

console.log(expensiveCalc(1000000));
// → "Đang tính..."

console.log(expensiveCalc(1000000));
// → "Lấy từ cache..."


// =======================================
// 3. debounce() — Chờ user ngừng gõ
function debounce(fn, delay) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);

// Test debounce
search("i");
search("ip");
search("iph");
search("iphone");
// → Chỉ chạy lần cuối: "iphone"


// =======================================
// 4. retry() — Thử lại nếu lỗi
async function retry(fn, maxAttempts = 3) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            console.log(`Lỗi lần ${attempt}: ${error.message}`);

            if (attempt === maxAttempts) {
                throw new Error("Đã thử tối đa số lần!");
            }
        }
    }
}


// =======================================
// TEST retry()

let count = 0;

const unstableAPI = async () => {
    count++;

    console.log("Gọi API lần:", count);

    if (count < 3) {
        throw new Error("API failed!");
    }

    return "API success!";
};

retry(unstableAPI)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));